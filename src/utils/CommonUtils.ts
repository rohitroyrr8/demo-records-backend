import { DRResponse } from "../models/DRResponse";

export class CommonUtils {
    prepareErrorMessage(error: any) {
        switch(error.name) {
            case 'InvalidInputError': 
                return new DRResponse(error.errorCode, error.message, null, null);
            case 'UnauthorizedError': 
                return new DRResponse(error.errorCode, error.message, null, null);
            case 'DRError': 
                return new DRResponse(error.errorCode, error.message, null, null);
            default: 
                console.error(`Error: ${error}`);
                return new DRResponse(500, 'Something went wrong. Please try again', error, null);
        }

    }
}