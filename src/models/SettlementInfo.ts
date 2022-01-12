import { BankDetails } from "./BankDetails";
import { ClaimDocument } from "./ClaimDocument";

export class SettlementInfo {
    private settlementBy: string;
    private settlementDate: Date;
    private settlementDocument: ClaimDocument;
    private settlementReference: string;
    private settlemntBankDetails: BankDetails;

    constructor(obj: any) {
        this.settlementBy = obj.settlementBy;
        this.settlementReference = obj.settlementReference;
        this.settlementDate = new Date(obj.settlementDate);
        this.settlementDocument = new ClaimDocument(obj.settlementDocument);
        this.settlemntBankDetails = new BankDetails(obj.settlemntBankDetails);
    }

    /**
     * Getter $settlementReference
     * @return {string}
     */
	public get $settlementReference(): string {
		return this.settlementReference;
	}

    /**
     * Setter $settlementReference
     * @param {string} value
     */
	public set $settlementReference(value: string) {
		this.settlementReference = value;
	}


    /**
     * Getter $settlementDate
     * @return {Date}
     */
	public get $settlementDate(): Date {
		return this.settlementDate;
	}

    /**
     * Setter $settlementDate
     * @param {Date} value
     */
	public set $settlementDate(value: Date) {
		this.settlementDate = value;
	}

    /**
     * Getter $settlementBy
     * @return {string}
     */
	public get $settlementBy(): string {
		return this.settlementBy;
	}

    /**
     * Getter $settlementDocument
     * @return {ClaimDocument}
     */
	public get $settlementDocument(): ClaimDocument {
		return this.settlementDocument;
	}

    /**
     * Getter $settlemntBankDetails
     * @return {BankDetails}
     */
	public get $settlemntBankDetails(): BankDetails {
		return this.settlemntBankDetails;
	}

    /**
     * Setter $settlementBy
     * @param {string} value
     */
	public set $settlementBy(value: string) {
		this.settlementBy = value;
	}

    /**
     * Setter $settlementDocument
     * @param {ClaimDocument} value
     */
	public set $settlementDocument(value: ClaimDocument) {
		this.settlementDocument = value;
	}

    /**
     * Setter $settlemntBankDetails
     * @param {BankDetails} value
     */
	public set $settlemntBankDetails(value: BankDetails) {
		this.settlemntBankDetails = value;
	}

}