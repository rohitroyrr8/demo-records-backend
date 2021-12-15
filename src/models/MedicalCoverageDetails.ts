import { AdmisiblityCriteria } from "./AdmisiblityCriteria"
import { PayablityCriteria } from "./PayablityCriteria";

export class MedicalCoverageDetails {
    private admisiblityCriteria: AdmisiblityCriteria;
    private payablityCriteria: PayablityCriteria;

    constructor(obj: any) {
        this.admisiblityCriteria = new AdmisiblityCriteria(obj.admisiblityCriteria);
        this.payablityCriteria = new PayablityCriteria(obj.payablityCriteria);
    }


    /**
     * Getter $admisiblityCriteria
     * @return {AdmisiblityCriteria}
     */
	public get $admisiblityCriteria(): AdmisiblityCriteria {
		return this.admisiblityCriteria;
	}

    /**
     * Getter $payablityCriteria
     * @return {PayablityCriteria}
     */
	public get $payablityCriteria(): PayablityCriteria {
		return this.payablityCriteria;
	}

    /**
     * Setter $admisiblityCriteria
     * @param {AdmisiblityCriteria} value
     */
	public set $admisiblityCriteria(value: AdmisiblityCriteria) {
		this.admisiblityCriteria = value;
	}

    /**
     * Setter $payablityCriteria
     * @param {PayablityCriteria} value
     */
	public set $payablityCriteria(value: PayablityCriteria) {
		this.payablityCriteria = value;
	}
    
 }