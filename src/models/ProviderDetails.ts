export class ProviderDetails {
    private providerName: string;
    private providerCity: string;
    private providerType: string;

    constructor(obj: any) {
        this.providerName = obj.providerName;
        this.providerCity = obj.providerCity;
        this.providerType = obj.providerType;

    }

    /**
     * Getter $providerName
     * @return {string}
     */
	public get $providerName(): string {
		return this.providerName;
	}

    /**
     * Getter $providerCity
     * @return {string}
     */
	public get $providerCity(): string {
		return this.providerCity;
	}

    /**
     * Getter $providerType
     * @return {string}
     */
	public get $providerType(): string {
		return this.providerType;
	}

    /**
     * Setter $providerName
     * @param {string} value
     */
	public set $providerName(value: string) {
		this.providerName = value;
	}

    /**
     * Setter $providerCity
     * @param {string} value
     */
	public set $providerCity(value: string) {
		this.providerCity = value;
	}

    /**
     * Setter $providerType
     * @param {string} value
     */
	public set $providerType(value: string) {
		this.providerType = value;
	}

}