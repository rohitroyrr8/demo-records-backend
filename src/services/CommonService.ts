const bcrypt = require('bcryptjs');

import { InvalidInputError } from "../errors/InvalidInputError";
import { UserDetails } from "../models/UserDetails";
import { DRResponse } from "../models/DRResponse";
import { CommonUtils } from "../utils/CommonUtils";
import { MongoDBUtils } from "../utils/MongoUtils";
import { EmailService } from "./EmailService";

export class CommonService {
    async updatePassword(emailAddress: string, request: any) {
        try {
            if(!request.currentPassword) { throw new InvalidInputError('currentPassword is required'); }
            if(!request.newPassword) { throw new InvalidInputError('newPassword is required'); }
            if(!emailAddress) { throw new InvalidInputError('emailAddress is required'); }
            
            let registedUsers: any[] = await new MongoDBUtils().filter({emailAddress: emailAddress}, 'users');
            if(!registedUsers || registedUsers.length !== 1) { throw new InvalidInputError('In-correct email-address'); }

            let user: UserDetails = new UserDetails(registedUsers[0]);
            let isPasswordMatched = await bcrypt.compare(request.currentPassword, user.$password);
            if(!isPasswordMatched) { throw new InvalidInputError('In-correct password');  }

            user.$password = await bcrypt.hash(request.newPassword, 8);
            
            await new MongoDBUtils().update(user.$_id, user, 'users');
            // new EmailService().passwordResetSuccessfull(user.$emailAddress, user.$name);

            return new DRResponse(200, 'Password has been updated successfully.');
        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    updateSettings() {

    }
}