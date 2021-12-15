export class InvalidInputError extends Error {
    private errorCode: number;
    constructor(message: string) {
        super();
        this.errorCode = 400;
        this.name = 'InvalidInputError';
        this.message = message;
    }
}