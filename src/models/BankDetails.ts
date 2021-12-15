export class BankDetails {
    private accountHolderName: string;
    private accountType: string;
    private accountNumber: string;
    private bankName: string;
    private swiftCode: string;

    constructor(obj: any) {
        this.accountHolderName = obj.accountHolderName
        this.accountType = obj.accountType
        this.accountNumber = obj.accountNumber
        this.bankName = obj.bankName
        this.swiftCode = obj.swiftCode
    }


    /**
     * Getter $accountHolderName
     * @return {string}
     */
	public get $accountHolderName(): string {
		return this.accountHolderName;
	}

    /**
     * Getter $accountType
     * @return {string}
     */
	public get $accountType(): string {
		return this.accountType;
	}

    /**
     * Getter $accountNumber
     * @return {string}
     */
	public get $accountNumber(): string {
		return this.accountNumber;
	}

    /**
     * Getter $bankName
     * @return {string}
     */
	public get $bankName(): string {
		return this.bankName;
	}

    /**
     * Getter $swiftCode
     * @return {string}
     */
	public get $swiftCode(): string {
		return this.swiftCode;
	}

    /**
     * Setter $accountHolderName
     * @param {string} value
     */
	public set $accountHolderName(value: string) {
		this.accountHolderName = value;
	}

    /**
     * Setter $accountType
     * @param {string} value
     */
	public set $accountType(value: string) {
		this.accountType = value;
	}

    /**
     * Setter $accountNumber
     * @param {string} value
     */
	public set $accountNumber(value: string) {
		this.accountNumber = value;
	}

    /**
     * Setter $bankName
     * @param {string} value
     */
	public set $bankName(value: string) {
		this.bankName = value;
	}

    /**
     * Setter $swiftCode
     * @param {string} value
     */
	public set $swiftCode(value: string) {
		this.swiftCode = value;
	}

}