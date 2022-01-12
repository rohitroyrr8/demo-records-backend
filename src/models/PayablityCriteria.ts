import { AdmisiblityCriteria } from "./AdmisiblityCriteria";
import { AmountLimit } from "./AmountLimit";
import { PercentageLimit } from "./PercentageLImit";

export class PayablityCriteria {
    private amountLimit: AmountLimit;
    private percentageLimit: PercentageLimit;

    constructor(obj: any) {
        
        this.amountLimit = new AmountLimit(obj.amountLimit);
        this.percentageLimit = new PercentageLimit(obj.percentageLimit);
    }

    /**
     * Getter $amountLimit
     * @return {AmountLimit}
     */
	public get $amountLimit(): AmountLimit {
		return this.amountLimit;
	}

    /**
     * Getter $percentageLimit
     * @return {PercentageLimit}
     */
	public get $percentageLimit(): PercentageLimit {
		return this.percentageLimit;
	}

    /**
     * Setter $amountLimit
     * @param {AmountLimit} value
     */
	public set $amountLimit(value: AmountLimit) {
		this.amountLimit = value;
	}

    /**
     * Setter $percentageLimit
     * @param {PercentageLimit} value
     */
	public set $percentageLimit(value: PercentageLimit) {
		this.percentageLimit = value;
	}

    
}