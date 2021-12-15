export class UnauthorizedError extends Error {
    private errorCode: number;
    constructor(message: string) {
        super();
        this.errorCode = 401;
        this.name = 'UnauthorizedError';
        this.message = message;
    }
}