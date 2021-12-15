export class PolicyInfo {
    private policyName: string;
    private insurerName: string;
    private coverType: string;
    private sumInsured: number;
    private startDate: Date;
    private endDate: Date;

    constructor(obj: any) {
        this.policyName = obj.policyName;
        this.insurerName = obj.insurerName;
        this.coverType = obj.coverType;
        this.sumInsured = obj.sumInsured;
        this.startDate = new Date(obj.startDate);
        this.endDate = new Date(obj.endDate);
    }


    /**
     * Getter $policyName
     * @return {string}
     */
	public get $policyName(): string {
		return this.policyName;
	}

    /**
     * Getter $insurerName
     * @return {string}
     */
	public get $insurerName(): string {
		return this.insurerName;
	}

    /**
     * Getter $coverType
     * @return {string}
     */
	public get $coverType(): string {
		return this.coverType;
	}

    /**
     * Getter $sumInsured
     * @return {number}
     */
	public get $sumInsured(): number {
		return this.sumInsured;
	}

    /**
     * Getter $startDate
     * @return {Date}
     */
	public get $startDate(): Date {
		return this.startDate;
	}

    /**
     * Getter $endDate
     * @return {Date}
     */
	public get $endDate(): Date {
		return this.endDate;
	}

    /**
     * Setter $policyName
     * @param {string} value
     */
	public set $policyName(value: string) {
		this.policyName = value;
	}

    /**
     * Setter $insurerName
     * @param {string} value
     */
	public set $insurerName(value: string) {
		this.insurerName = value;
	}

    /**
     * Setter $coverType
     * @param {string} value
     */
	public set $coverType(value: string) {
		this.coverType = value;
	}

    /**
     * Setter $sumInsured
     * @param {number} value
     */
	public set $sumInsured(value: number) {
		this.sumInsured = value;
	}

    /**
     * Setter $startDate
     * @param {Date} value
     */
	public set $startDate(value: Date) {
		this.startDate = value;
	}

    /**
     * Setter $endDate
     * @param {Date} value
     */
	public set $endDate(value: Date) {
		this.endDate = value;
	}

    
}