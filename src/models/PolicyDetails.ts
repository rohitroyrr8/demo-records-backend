import { Cover } from "./Cover";
import { MedicalCoverageDetails } from "./MedicalCoverageDetails";

export class PolicyDetails {
    private _id: string;
    private policyName: string;
    private policyDescription: string;
    private policyId: number;
    private insurerId: number;
    private insurerName: string;
    private availableCovers: Cover[];
    private medicalCoverageDetails: MedicalCoverageDetails;
    private bufferThresholdDays: number;
    private lastUpdatedOn: Date;
    private lastUdpatedBy: string;
    
    constructor(obj: any) {
        this._id = obj._id
        this.policyName = obj.policyName
        this.policyDescription = obj.policyDescription
        this.policyId = obj.policyId
        this.insurerId = obj.insurerId
        this.insurerName = obj.insurerName
        
        this.availableCovers = [];
        for(const row of obj.availableCovers) {
            this.availableCovers.push(new Cover(row));
        }
        
        this.medicalCoverageDetails = new MedicalCoverageDetails(obj.medicalCoverageDetails);
        this.bufferThresholdDays = obj.bufferThresholdDays || 0;
        this.lastUpdatedOn = new Date(obj.lastUpdatedOn)
        this.lastUdpatedBy = obj.lastUdpatedBy
        
            
    }

    /**
     * Getter $policyName
     * @return {string}
     */
	public get $policyName(): string {
		return this.policyName;
	}

    /**
     * Setter $policyName
     * @param {string} value
     */
	public set $policyName(value: string) {
		this.policyName = value;
	}
    

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter $policyDescription
     * @return {string}
     */
	public get $policyDescription(): string {
		return this.policyDescription;
	}

    /**
     * Getter $policyId
     * @return {number}
     */
	public get $policyId(): number {
		return this.policyId;
	}

    /**
     * Getter $insurerId
     * @return {number}
     */
	public get $insurerId(): number {
		return this.insurerId;
	}

    /**
     * Getter $insurerName
     * @return {string}
     */
	public get $insurerName(): string {
		return this.insurerName;
	}

    /**
     * Getter $availableCovers
     * @return {Cover[]}
     */
	public get $availableCovers(): Cover[] {
		return this.availableCovers;
	}

    /**
     * Getter $medicalCoverageDetails
     * @return {MedicalCoverageDetails}
     */
	public get $medicalCoverageDetails(): MedicalCoverageDetails {
		return this.medicalCoverageDetails;
	}

    /**
     * Getter $bufferThresholdDays
     * @return {number}
     */
	public get $bufferThresholdDays(): number {
		return this.bufferThresholdDays;
	}

    /**
     * Getter $lastUpdatedOn
     * @return {Date}
     */
	public get $lastUpdatedOn(): Date {
		return this.lastUpdatedOn;
	}

    /**
     * Getter $lastUdpatedBy
     * @return {string}
     */
	public get $lastUdpatedBy(): string {
		return this.lastUdpatedBy;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter $policyDescription
     * @param {string} value
     */
	public set $policyDescription(value: string) {
		this.policyDescription = value;
	}

    /**
     * Setter $policyId
     * @param {number} value
     */
	public set $policyId(value: number) {
		this.policyId = value;
	}

    /**
     * Setter $insurerId
     * @param {number} value
     */
	public set $insurerId(value: number) {
		this.insurerId = value;
	}

    /**
     * Setter $insurerName
     * @param {string} value
     */
	public set $insurerName(value: string) {
		this.insurerName = value;
	}

    /**
     * Setter $availableCovers
     * @param {Cover[]} value
     */
	public set $availableCovers(value: Cover[]) {
		this.availableCovers = value;
	}

    /**
     * Setter $medicalCoverageDetails
     * @param {MedicalCoverageDetails} value
     */
	public set $medicalCoverageDetails(value: MedicalCoverageDetails) {
		this.medicalCoverageDetails = value;
	}

    /**
     * Setter $bufferThresholdDays
     * @param {number} value
     */
	public set $bufferThresholdDays(value: number) {
		this.bufferThresholdDays = value;
	}

    /**
     * Setter $lastUpdatedOn
     * @param {Date} value
     */
	public set $lastUpdatedOn(value: Date) {
		this.lastUpdatedOn = value;
	}

    /**
     * Setter $lastUdpatedBy
     * @param {string} value
     */
	public set $lastUdpatedBy(value: string) {
		this.lastUdpatedBy = value;
	}

}