export class DRResponse {
    private status: number;
    private message: string;
    private error: any;
    private body: any;

    constructor(status?: number, message?: string, error?: any, body?: any) {
        this.status = status;
        this.message = message;
        this.error = error;
        this.body = body;
    }

    /**
     * Getter $status
     * @return {number}
     */
	public get $status(): number {
		return this.status;
	}

    /**
     * Getter $message
     * @return {string}
     */
	public get $message(): string {
		return this.message;
	}

    /**
     * Getter $error
     * @return {any}
     */
	public get $error(): any {
		return this.error;
	}

    /**
     * Getter $body
     * @return {any}
     */
	public get $body(): any {
		return this.body;
	}

    /**
     * Setter $status
     * @param {number} value
     */
	public set $status(value: number) {
		this.status = value;
	}

    /**
     * Setter $message
     * @param {string} value
     */
	public set $message(value: string) {
		this.message = value;
	}

    /**
     * Setter $error
     * @param {any} value
     */
	public set $error(value: any) {
		this.error = value;
	}

    /**
     * Setter $body
     * @param {any} value
     */
	public set $body(value: any) {
		this.body = value;
	}

    static createInstance(request:any): DRResponse {
        let response: DRResponse = new DRResponse();
        if(request) {
            response.$status = request.status;
            response.$message = request.message;
            response.$error = request.error;
            response.$body = request.body;
            
        }
        return response;
    }
}