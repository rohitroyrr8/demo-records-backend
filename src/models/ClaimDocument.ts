export class ClaimDocument {
    private documentName: string;
    private documentUrl: string;
    private documentType: string;
    
    constructor(obj: any) {
        this.documentName = obj.documentName;
        this.documentUrl = obj.documentUrl;
        this.documentType = obj.documentType;
    }

    /**
     * Getter $documentName
     * @return {string}
     */
	public get $documentName(): string {
		return this.documentName;
	}

    /**
     * Getter $documentUrl
     * @return {string}
     */
	public get $documentUrl(): string {
		return this.documentUrl;
	}

    /**
     * Getter $documentType
     * @return {string}
     */
	public get $documentType(): string {
		return this.documentType;
	}

    /**
     * Setter $documentName
     * @param {string} value
     */
	public set $documentName(value: string) {
		this.documentName = value;
	}

    /**
     * Setter $documentUrl
     * @param {string} value
     */
	public set $documentUrl(value: string) {
		this.documentUrl = value;
	}

    /**
     * Setter $documentType
     * @param {string} value
     */
	public set $documentType(value: string) {
		this.documentType = value;
	}
    
}