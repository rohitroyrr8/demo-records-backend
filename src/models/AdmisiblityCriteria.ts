import { CityCriteria } from "../enums/CityCriteria";
import { ClaimCriteria } from "../enums/ClaimCriteria";
import { HospitalCriteria } from "../enums/HospitalCriteria";

export class AdmisiblityCriteria {
    private cityCriteria: CityCriteria;
    private hospitalCriteria: HospitalCriteria;
    private claimCriteria: ClaimCriteria;

    constructor(any: any) {
        this.cityCriteria = any.cityCriteria;
        this.hospitalCriteria = any.hospitalCriteria;
        this.claimCriteria = any.claimCriteria;
    }

    /**
     * Getter $cityCriteria
     * @return {CityCriteria}
     */
	public get $cityCriteria(): CityCriteria {
		return this.cityCriteria;
	}

    /**
     * Getter $hospitalCriteria
     * @return {HospitalCriteria}
     */
	public get $hospitalCriteria(): HospitalCriteria {
		return this.hospitalCriteria;
	}

    /**
     * Getter $claimCriteria
     * @return {ClaimCriteria}
     */
	public get $claimCriteria(): ClaimCriteria {
		return this.claimCriteria;
	}

    /**
     * Setter $cityCriteria
     * @param {CityCriteria} value
     */
	public set $cityCriteria(value: CityCriteria) {
		this.cityCriteria = value;
	}

    /**
     * Setter $hospitalCriteria
     * @param {HospitalCriteria} value
     */
	public set $hospitalCriteria(value: HospitalCriteria) {
		this.hospitalCriteria = value;
	}

    /**
     * Setter $claimCriteria
     * @param {ClaimCriteria} value
     */
	public set $claimCriteria(value: ClaimCriteria) {
		this.claimCriteria = value;
	}



}