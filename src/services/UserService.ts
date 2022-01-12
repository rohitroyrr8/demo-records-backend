
import { ClaimStatus } from "../enums/ClaimStatus";
import { CoverType } from "../enums/CoverType";
import { EnrollmentStatus } from "../enums/EnrollmentStatus";
import { UserType } from "../enums/UserType";
import { DRError } from "../errors/DRErros";
import { InvalidInputError } from "../errors/InvalidInputError";
import { ClaimDetails } from "../models/ClaimDetails";
import { ClaimQuery } from "../models/ClaimQuery";
import { Cover } from "../models/Cover";
import { DRResponse } from "../models/DRResponse";
import { PolicyDetails } from "../models/PolicyDetails";
import { SettlementInfo } from "../models/SettlementInfo";
import { UserDetails } from "../models/UserDetails";
import { CommonUtils } from "../utils/CommonUtils";
import { MongoDBUtils } from "../utils/MongoUtils";

export class UserService {

    async fetchActiveOrder(request: any): Promise<DRResponse> {
        try {
            return new DRResponse(200, 'Account active orders fetched');
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async listPolicies(emailAddress: string): Promise<DRResponse> {
        try {
            let policies: PolicyDetails[] = [];
            let selector: any = {};
            // selector.emailAddress = emailAddress;
            
            let policyData: any  = new MongoDBUtils().filter(selector, 'policies');
            
            for(let row of policyData) {
                policies.push(new PolicyDetails(row));
            }

            let response: DRResponse = new DRResponse(200, 'Policies list fetched successfullly', null, policies);
            return response;
        } catch(error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async getPolicyDetails(policyId: string): Promise<DRResponse> {
        try {
            if(!policyId) { throw new InvalidInputError('policyId is required'); }
            let policyData: any = new MongoDBUtils().get(policyId, 'policies');
            return new DRResponse(200, 'Policy details fetched', null, new PolicyDetails(policyData));
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async purchasePolicy(userId: string, policyId: string, coverType: CoverType): Promise<DRResponse> {
        try {
            if(!policyId) { throw new InvalidInputError('policyId is required'); }
            if(!userId) { throw new InvalidInputError('userId is required'); }

            let policyData: any = new MongoDBUtils().get(policyId, 'policies');
            if(!policyData) { throw new DRError('no policy details found'); }
            let policy: PolicyDetails = new PolicyDetails(policyData);

            let userData: any = new MongoDBUtils().get(userId, 'users');
            if(!userData) {throw new DRError('No user details found'); }
            let userDetails: UserDetails = new UserDetails(userData);
            
            let newCover: Cover = policy.$availableCovers.filter(item => item.$coverType === coverType)[0];

            if(newCover.$premiumPerYear > userDetails.$balance) { throw new DRError('Insufficent balance. Please recharge your account'); }
            userDetails.$balance -= newCover.$premiumPerYear;

            newCover.$enrollmentDate = new Date();
            newCover.$coverageStartDate = new Date();
            newCover.$coverageEndDate = new Date();
            newCover.$enrollmentStatus = EnrollmentStatus.ENDORSED;
            newCover.$remainingSumInsured = newCover.$totalSumInsured;
            
            userDetails.$availableCovers = userDetails.$availableCovers.length > 0 ? userDetails.$availableCovers : [];
            userDetails.$availableCovers.push(newCover);
            
            return new DRResponse(200, 'policy purchasd successfully', null);
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async registerClaim(request: any, applicableCover: Cover) : Promise<DRResponse> {
        try {
            
            let claim: ClaimDetails = new ClaimDetails(JSON.parse(request));
            if(claim.$memberInfo || claim.$memberInfo.$memberId) { throw new InvalidInputError("Memeber info is missing")};
            if(claim.$policyInfo || claim.$policyInfo.$policyName) { throw new InvalidInputError("Memeber info is missing")};
            if(claim.$isAccident === claim.$isDeath) { throw new InvalidInputError("Please mention if death case or accident case"); }
            if(!claim.$totalClaimedAmount ) { throw new InvalidInputError("totalClaimedAmount is required"); }
            if(!claim.$settlementInfo || !claim.$settlementInfo.$settlemntBankDetails || 
                !claim.$settlementInfo.$settlemntBankDetails.$bankName || !claim.$settlementInfo.$settlemntBankDetails.$accountNumber ||
                !claim.$settlementInfo.$settlemntBankDetails.$accountHolderName || !claim.$settlementInfo.$settlemntBankDetails.$accountType) {
                    throw new InvalidInputError("Bank Details required to register the claim");
                    
                }

            // claim.$claimId = `LIVWELL/${claim.$memberInfo.$memberId}/${new Date().getFullYear()}/1`;
            claim.$claimStatus = ClaimStatus.REGISTERED;
            claim.$totalApprovedAmount = 0;

            claim.$createdOn = new Date();
            claim.$lastUpdatedOn = new Date();
            await new MongoDBUtils().insert(claim, 'claims');
            return new DRResponse(200, 'policy registerd successfully', null);
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async approve(request: any, approvedBy: string): Promise<DRResponse> {
        try {
            let claimId: string = request.claimId;
            let claimObj: any = new MongoDBUtils().get(claimId, 'claims');
            let claim: ClaimDetails = new ClaimDetails(JSON.parse(claimObj));
            if(!claim) { throw new InvalidInputError("No claim found with this claim id");}
            claim = new ClaimDetails(JSON.parse(request));

            if(approvedBy == UserType.LIVWELL) {
                claim.$claimStatus = ClaimStatus.APPROVED;
            } else {
                claim.$claimStatus = ClaimStatus.SETTLED;
                if(claim.$isDeath) {
                    claim.$totalApprovedAmount = claim.$policyInfo.$sumInsured || 0
                } else {
                    claim.$totalApprovedAmount = claim.$totalClaimedAmount;
                }
                
                // updating settlement info
                claim.$settlementInfo = claim.$settlementInfo || new SettlementInfo({});
                claim.$settlementInfo.$settlementDate = new Date();
                claim.$settlementInfo.$settlementBy = claim.$policyInfo.$insurerName; 

                // update remaing amount in availbe covers in userdetails
                let userDetails: UserDetails = null;
                
                userDetails.$availableCovers.forEach(item => {
                    if(item.$policyId === 1 && item.$coverId === 1) {
                        item.$remainingSumInsured -= claim.$totalApprovedAmount;
                    }
                })
                await new MongoDBUtils().update(userDetails.$userId, claim, 'users');
            }

            claim.$lastUpdatedOn = new Date();
            await new MongoDBUtils().update(claim.$claimId, claim, 'claims');

            return new DRResponse(200, 'claim updated successfully', null);
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async reject(request: any, rejectedBy: string): Promise<DRResponse> {
        try {
            let claimId: string = request.claimId;
            let remark: string = request.remark;
            if(!claimId) { throw new InvalidInputError("claimId is required"); }
            if(!rejectedBy) { throw new InvalidInputError("rejectedBy is required"); }

            if(![UserType.LIVWELL.toString(), UserType.INSURER.toString()].includes(rejectedBy)) 
            { throw new InvalidInputError("This action can be performed by authorized identity");}

            let claimObj: any = new MongoDBUtils().get(claimId, 'claims');
            let claim: ClaimDetails = new ClaimDetails(JSON.parse(claimObj));
            if(!claim) { throw new InvalidInputError("No claim found with this claim id");}
            claim = new ClaimDetails(JSON.parse(request));

            claim.$claimStatus = ClaimStatus.REJECTED;
            claim.$totalApprovedAmount = 0;
            claim.$lastUpdatedOn = new Date();
            await new MongoDBUtils().update(claim.$claimId, claim, 'claims');
            return new DRResponse(200, 'policy rejected successfully', null);

        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }
    
    async markClaimAsClosed(request: any): Promise<DRResponse> {
        try {
            let claimId: string = request.claimId;
            let claimObj: any = new MongoDBUtils().get(claimId, 'claims');
            let claim: ClaimDetails = new ClaimDetails(JSON.parse(claimObj));
            if(!claim) { throw new InvalidInputError("No claim found with this claim id");}
            claim = new ClaimDetails(JSON.parse(request));

            claim.$claimStatus = ClaimStatus.CLOSED;
            claim.$lastUpdatedOn = new Date();
            await new MongoDBUtils().update(claim.$claimId, claim, 'claims');

            return new DRResponse(200, 'policy rejected successfully', null);
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }
  
    async raiseQuery(claimId: string, queryObj: any): Promise<DRResponse> {
        try {
            let claimQuery: ClaimQuery = new ClaimQuery(JSON.parse(queryObj));
            if(!claimQuery.$remark) { throw new InvalidInputError("Query is required"); }
            claimQuery.$queryRaisedOn = new Date();

            let claimObj: any = new MongoDBUtils().get(claimId, 'claims');
            let claim: ClaimDetails = new ClaimDetails(JSON.parse(claimObj));
            if(!claim) { throw new InvalidInputError("No claim found with this claim id");}
            
            claim.$claimQueries = claim.$claimQueries === null ? [] : claim.$claimQueries;
            claim.$claimQueries.push(claimQuery);

            // claim.$claimStatus = ClaimStatus.CLOSED;
            claim.$lastUpdatedOn = new Date();
            await new MongoDBUtils().update(claim.$claimId, claim, 'claims');

            return new DRResponse(200, 'claim query raised successfully', null);
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    } 

    async respondQuery(request: any): Promise<DRResponse> {
        try {
            let claimId: string = request.claimId;
            let claimObj: any = new MongoDBUtils().get(claimId, 'claims');
            let claim: ClaimDetails = new ClaimDetails(JSON.parse(claimObj));
            if(!claim) { throw new InvalidInputError("No claim found with this claim id");}
            claim = new ClaimDetails(JSON.parse(request));

            claim.$claimQueries.forEach(item => {
                if(! item.$queryRespondedOn) {
                    item.$queryRespondedOn = new Date();
                }
            });
            // claim.$claimStatus = ClaimStatus.CLOSED;
            claim.$lastUpdatedOn = new Date();
            await new MongoDBUtils().update(claim.$claimId, claim, 'claims');

            return new DRResponse(200, 'claim query responded', null);
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    } 

    async settleClaim(request: any): Promise<DRResponse> {
        try {
            let claimId: string = request.claimId;
            let claimObj: any = new MongoDBUtils().get(claimId, 'claims');
            let claim: ClaimDetails = new ClaimDetails(JSON.parse(claimObj));
            if(!claim) { throw new InvalidInputError("No claim found with this claim id");}
            claim = new ClaimDetails(JSON.parse(request));

            claim.$claimQueries.forEach(item => {
                if(! item.$queryRespondedOn) {
                    item.$queryRespondedOn = new Date();
                }
            });
            // claim.$claimStatus = ClaimStatus.CLOSED;
            claim.$lastUpdatedOn = new Date();
            await new MongoDBUtils().update(claim.$claimId, claim, 'claims');

            return new DRResponse(200, 'claim query responded', null);
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    } 
}