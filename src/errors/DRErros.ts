export class DRError extends Error {
    private errorCode: number;
    constructor(message: string) {
        super();
        this.errorCode = 422;
        this.name = 'DRError';
        this.message = message;
    }
}