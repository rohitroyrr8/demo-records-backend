export class ClaimQuery {
    private queryRaisedOn: Date;
    private queryRespondedOn: Date;
    private remark: string;
    private respondedRemark: string;
    constructor(obj: any) {
        this.queryRaisedOn = obj.queryRaisedOn;
        this.queryRespondedOn = obj.queryRespondedOn;
        this.remark = obj.remark;
        this.respondedRemark = obj.respondedRemark;
    }


    /**
     * Getter $respondedRemark
     * @return {string}
     */
	public get $respondedRemark(): string {
		return this.respondedRemark;
	}

    /**
     * Setter $respondedRemark
     * @param {string} value
     */
	public set $respondedRemark(value: string) {
		this.respondedRemark = value;
	}

    /**
     * Getter $queryRaisedOn
     * @return {Date}
     */
	public get $queryRaisedOn(): Date {
		return this.queryRaisedOn;
	}

    /**
     * Getter $queryRespondedOn
     * @return {Date}
     */
	public get $queryRespondedOn(): Date {
		return this.queryRespondedOn;
	}

    /**
     * Getter $remark
     * @return {string}
     */
	public get $remark(): string {
		return this.remark;
	}

    /**
     * Setter $queryRaisedOn
     * @param {Date} value
     */
	public set $queryRaisedOn(value: Date) {
		this.queryRaisedOn = value;
	}

    /**
     * Setter $queryRespondedOn
     * @param {Date} value
     */
	public set $queryRespondedOn(value: Date) {
		this.queryRespondedOn = value;
	}

    /**
     * Setter $remark
     * @param {string} value
     */
	public set $remark(value: string) {
		this.remark = value;
	}

}