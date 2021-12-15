import { EnrollmentStatus } from "aws-sdk/clients/alexaforbusiness";
import { CoverType } from "../enums/CoverType";

export class Cover {
    private policyId: number;
    private coverId: number;
    private coverType: CoverType;
    private totalSumInsured: number;
    private premiumPerYear: number;
    
    private enrollmentDate: Date;
    private enrollmentStatus: EnrollmentStatus;
    private enrollmentNumber: string;
    private coverageStartDate: Date;
    private coverageEndDate: Date;
    private remainingSumInsured: number;
    
    constructor(obj: any) {
        this.policyId = obj.policyId;
        this.coverId = obj.coverId;
        this.coverType = obj.coverType;
        this.totalSumInsured = obj.totalSumInsured;
        this.premiumPerYear = obj.premiumPerYear;

        this.enrollmentDate = new Date(obj.enrollmentDate);
        this.enrollmentStatus = obj.enrollmentStatus;
        this.enrollmentNumber = obj.enrollmentNumber;
        this.coverageStartDate = new Date(obj.coverageStartDate);
        this.coverageEndDate = new Date(obj.coverageEndDate);
        this.remainingSumInsured = obj.remainingSumInsured;
    }

   

    /**
     * Getter $policyId
     * @return {number}
     */
	public get $policyId(): number {
		return this.policyId;
	}

    /**
     * Setter $policyId
     * @param {number} value
     */
	public set $policyId(value: number) {
		this.policyId = value;
	}

    /**
     * Getter $coverId
     * @return {number}
     */
	public get $coverId(): number {
		return this.coverId;
	}

    /**
     * Getter $coverType
     * @return {CoverType}
     */
	public get $coverType(): CoverType {
		return this.coverType;
	}

    /**
     * Getter $totalSumInsured
     * @return {number}
     */
	public get $totalSumInsured(): number {
		return this.totalSumInsured;
	}

    /**
     * Getter $premiumPerYear
     * @return {number}
     */
	public get $premiumPerYear(): number {
		return this.premiumPerYear;
	}

    /**
     * Setter $coverId
     * @param {number} value
     */
	public set $coverId(value: number) {
		this.coverId = value;
	}

    /**
     * Setter $coverType
     * @param {CoverType} value
     */
	public set $coverType(value: CoverType) {
		this.coverType = value;
	}

    /**
     * Setter $totalSumInsured
     * @param {number} value
     */
	public set $totalSumInsured(value: number) {
		this.totalSumInsured = value;
	}

    /**
     * Setter $premiumPerYear
     * @param {number} value
     */
	public set $premiumPerYear(value: number) {
		this.premiumPerYear = value;
	}

    /**
     * Getter $enrollmentDate
     * @return {Date}
     */
	public get $enrollmentDate(): Date {
		return this.enrollmentDate;
	}

    /**
     * Getter $enrollmentStatus
     * @return {EnrollmentStatus}
     */
	public get $enrollmentStatus(): EnrollmentStatus {
		return this.enrollmentStatus;
	}

    /**
     * Getter $enrollmentNumber
     * @return {string}
     */
	public get $enrollmentNumber(): string {
		return this.enrollmentNumber;
	}

    /**
     * Getter $coverageStartDate
     * @return {Date}
     */
	public get $coverageStartDate(): Date {
		return this.coverageStartDate;
	}

    /**
     * Getter $coverageEndDate
     * @return {Date}
     */
	public get $coverageEndDate(): Date {
		return this.coverageEndDate;
	}

    /**
     * Getter $remainingSumInsured
     * @return {number}
     */
	public get $remainingSumInsured(): number {
		return this.remainingSumInsured;
	}

    /**
     * Setter $enrollmentDate
     * @param {Date} value
     */
	public set $enrollmentDate(value: Date) {
		this.enrollmentDate = value;
	}

    /**
     * Setter $enrollmentStatus
     * @param {EnrollmentStatus} value
     */
	public set $enrollmentStatus(value: EnrollmentStatus) {
		this.enrollmentStatus = value;
	}

    /**
     * Setter $enrollmentNumber
     * @param {string} value
     */
	public set $enrollmentNumber(value: string) {
		this.enrollmentNumber = value;
	}

    /**
     * Setter $coverageStartDate
     * @param {Date} value
     */
	public set $coverageStartDate(value: Date) {
		this.coverageStartDate = value;
	}

    /**
     * Setter $coverageEndDate
     * @param {Date} value
     */
	public set $coverageEndDate(value: Date) {
		this.coverageEndDate = value;
	}

    /**
     * Setter $remainingSumInsured
     * @param {number} value
     */
	public set $remainingSumInsured(value: number) {
		this.remainingSumInsured = value;
	}
    
    
}