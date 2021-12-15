export class PercentageLimit {
    private sublimitPerClaim: number;

    constructor(obj: any) {
        this.sublimitPerClaim = obj.sublimitPerClaim;
    }

    /**
     * Getter $sublimitPerClaim
     * @return {number}
     */
	public get $sublimitPerClaim(): number {
		return this.sublimitPerClaim;
	}

    /**
     * Setter $sublimitPerClaim
     * @param {number} value
     */
	public set $sublimitPerClaim(value: number) {
		this.sublimitPerClaim = value;
	}
    
}