
import { CoverType } from "../enums/CoverType";
import { EnrollmentStatus } from "../enums/EnrollmentStatus";
import { DRError } from "../errors/DRErros";
import { InvalidInputError } from "../errors/InvalidInputError";
import { ClaimDetails } from "../models/ClaimDetails";
import { Cover } from "../models/Cover";
import { DRResponse } from "../models/DRResponse";
import { PolicyDetails } from "../models/PolicyDetails";
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
            selector.emailAddress = emailAddress;
            
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
            if(!userData) {throw new DRError('no user details found'); }
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

    async registerClaim() : Promise<DRResponse> {
        try {
            
            let claim: ClaimDetails = new ClaimDetails({});

            new MongoDBUtils().insert(claim, 'claims');
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }
 
    // list users
    // list policy
    // create policy
    // buy policy
    // 
}