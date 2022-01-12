import { ClaimStatus } from "../enums/ClaimStatus";
import { ClaimDocument } from "./ClaimDocument";
import { ClaimQuery } from "./ClaimQuery";
import { MemberInfo } from "./MemberInfo";
import { PolicyInfo } from "./PolicyInfo";
import { ProviderDetails } from "./ProviderDetails";
import { SettlementInfo } from "./SettlementInfo";

export class ClaimDetails {
    private _id: string;
    private claimId: string;
    private claimStatus: ClaimStatus;
    private rejectionReason: string;
    private memberInfo: MemberInfo;
    private policyInfo: PolicyInfo;
    private providerDetails: ProviderDetails;
    private isAccident: boolean;
    private isDeath: boolean;
    private claimDocuments: ClaimDocument[];
    private claimQueries: ClaimQuery[];
    private totalClaimedAmount: number;
    private totalEligibleAmount: number;
    private totalDeduction: number;
    private totalApprovedAmount: number;
    private settlementInfo: SettlementInfo;
    
    private createdOn: Date;
    private lastUpdatedOn: Date;
    
    constructor(obj: any) {
        this._id = obj._id;
        this.claimId = obj._id;
        this.claimStatus = obj.claimStatus;
        this.rejectionReason = obj.rejectionReason
        this.memberInfo = new MemberInfo(obj.memberInfo);
        this.policyInfo = new PolicyInfo(obj.policyInfo);
        this.providerDetails = new ProviderDetails(obj.providerDetails);
        this.isAccident = obj.isAccident;
        this.isDeath = obj.isDeath;
        
        this.claimDocuments = [];
        for(const row of obj.claimDocuments) {
            this.claimDocuments.push(new ClaimDocument(obj.claimDocuments));
        }

        this.claimQueries = [];
        for(const row of obj.claimQueries) {
            this.claimQueries.push(new ClaimQuery(obj.claimDocuments));
        }
        this.totalClaimedAmount = obj.totalClaimedAmount || 0;
        this.totalEligibleAmount = obj.totalEligibleAmount || 0;
        this.totalDeduction = obj.totalDeduction || 0;
        this.totalApprovedAmount = obj.totalApprovedAmount || 0;
        this.settlementInfo = obj.settlementInfo;
        this.createdOn = obj.createdOn;
        this.lastUpdatedOn = obj.lastUpdatedOn;
    }


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter $claimId
     * @return {string}
     */
	public get $claimId(): string {
		return this.claimId;
	}

    /**
     * Getter $claimStatus
     * @return {ClaimStatus}
     */
	public get $claimStatus(): ClaimStatus {
		return this.claimStatus;
	}

    /**
     * Getter $memberInfo
     * @return {MemberInfo}
     */
	public get $memberInfo(): MemberInfo {
		return this.memberInfo;
	}

    /**
     * Getter $policyInfo
     * @return {PolicyInfo}
     */
	public get $policyInfo(): PolicyInfo {
		return this.policyInfo;
	}

    /**
     * Getter $providerDetails
     * @return {ProviderDetails}
     */
	public get $providerDetails(): ProviderDetails {
		return this.providerDetails;
	}

    /**
     * Getter $isAccident
     * @return {boolean}
     */
	public get $isAccident(): boolean {
		return this.isAccident;
	}

    /**
     * Getter $isDeath
     * @return {boolean}
     */
	public get $isDeath(): boolean {
		return this.isDeath;
	}

    /**
     * Getter $settlementInfo
     * @return {SettlementInfo}
     */
	public get $settlementInfo(): SettlementInfo {
		return this.settlementInfo;
	}

    /**
     * Getter $createdOn
     * @return {Date}
     */
	public get $createdOn(): Date {
		return this.createdOn;
	}

    /**
     * Getter $lastUpdatedOn
     * @return {Date}
     */
	public get $lastUpdatedOn(): Date {
		return this.lastUpdatedOn;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter $claimId
     * @param {string} value
     */
	public set $claimId(value: string) {
		this.claimId = value;
	}

    /**
     * Setter $claimStatus
     * @param {ClaimStatus} value
     */
	public set $claimStatus(value: ClaimStatus) {
		this.claimStatus = value;
	}

    /**
     * Setter $memberInfo
     * @param {MemberInfo} value
     */
	public set $memberInfo(value: MemberInfo) {
		this.memberInfo = value;
	}

    /**
     * Setter $policyInfo
     * @param {PolicyInfo} value
     */
	public set $policyInfo(value: PolicyInfo) {
		this.policyInfo = value;
	}

    /**
     * Setter $providerDetails
     * @param {ProviderDetails} value
     */
	public set $providerDetails(value: ProviderDetails) {
		this.providerDetails = value;
	}

    /**
     * Setter $isAccident
     * @param {boolean} value
     */
	public set $isAccident(value: boolean) {
		this.isAccident = value;
	}

    /**
     * Setter $isDeath
     * @param {boolean} value
     */
	public set $isDeath(value: boolean) {
		this.isDeath = value;
	}

    /**
     * Getter $claimDocuments
     * @return {ClaimDocument[]}
     */
	public get $claimDocuments(): ClaimDocument[] {
		return this.claimDocuments;
	}

    /**
     * Getter $totalClaimedAmount
     * @return {number}
     */
	public get $totalClaimedAmount(): number {
		return this.totalClaimedAmount;
	}

    /**
     * Getter $totalEligibleAmount
     * @return {number}
     */
	public get $totalEligibleAmount(): number {
		return this.totalEligibleAmount;
	}

    /**
     * Getter $totalDeduction
     * @return {number}
     */
	public get $totalDeduction(): number {
		return this.totalDeduction;
	}

    /**
     * Getter $totalApprovedAmount
     * @return {number}
     */
	public get $totalApprovedAmount(): number {
		return this.totalApprovedAmount;
	}

    /**
     * Setter $claimDocuments
     * @param {ClaimDocument[]} value
     */
	public set $claimDocuments(value: ClaimDocument[]) {
		this.claimDocuments = value;
	}

    /**
     * Setter $totalClaimedAmount
     * @param {number} value
     */
	public set $totalClaimedAmount(value: number) {
		this.totalClaimedAmount = value;
	}

    /**
     * Setter $totalEligibleAmount
     * @param {number} value
     */
	public set $totalEligibleAmount(value: number) {
		this.totalEligibleAmount = value;
	}

    /**
     * Setter $totalDeduction
     * @param {number} value
     */
	public set $totalDeduction(value: number) {
		this.totalDeduction = value;
	}

    /**
     * Setter $totalApprovedAmount
     * @param {number} value
     */
	public set $totalApprovedAmount(value: number) {
		this.totalApprovedAmount = value;
	}
    

    /**
     * Setter $settlementInfo
     * @param {SettlementInfo} value
     */
	public set $settlementInfo(value: SettlementInfo) {
		this.settlementInfo = value;
	}

    /**
     * Setter $createdOn
     * @param {Date} value
     */
	public set $createdOn(value: Date) {
		this.createdOn = value;
	}

    /**
     * Setter $lastUpdatedOn
     * @param {Date} value
     */
	public set $lastUpdatedOn(value: Date) {
		this.lastUpdatedOn = value;
	}

    /**
     * Getter $claimQueries
     * @return {ClaimQuery[]}
     */
	public get $claimQueries(): ClaimQuery[] {
		return this.claimQueries;
	}

    /**
     * Setter $claimQueries
     * @param {ClaimQuery[]} value
     */
	public set $claimQueries(value: ClaimQuery[]) {
		this.claimQueries = value;
	}

    /**
     * Getter $rejectionReason
     * @return {string}
     */
	public get $rejectionReason(): string {
		return this.rejectionReason;
	}

    /**
     * Setter $rejectionReason
     * @param {string} value
     */
	public set $rejectionReason(value: string) {
		this.rejectionReason = value;
	}

}