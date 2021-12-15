var randomstring = require("randomstring");
const bcrypt = require('bcryptjs');
import jwt = require('jsonwebtoken');

import { UserType } from '../enums/UserType';
import { InvalidInputError } from "../errors/InvalidInputError";
import { UserDetails } from "../models/UserDetails";
import { DRResponse } from "../models/DRResponse";
import { CommonUtils } from "../utils/CommonUtils";
import { MongoDBUtils } from "../utils/MongoUtils";
import { EmailService } from "./EmailService";

export class AuthenticationService {

    // '/user/register',
    // '/user/auth',
    // '/user/forget-pasword',
    // '/user/verify-email',
    // '/user/send-otp',
    // '/user/verify-otp',
    // '/user/update-password',

    async register(request: any): Promise<DRResponse> {
        try {
            let user: UserDetails = new UserDetails(request);
            if(!user.$name) { throw new InvalidInputError('name is required'); }
            if(!user.$emailAddress) { throw new InvalidInputError('emailAddress is required'); }
            if(!user.$password) { throw new InvalidInputError('password is required'); }
            
            // if email is already registerd
            let registedUser: any[] = await new MongoDBUtils().filter({emailAddress: user.$emailAddress}, 'users');
            if(registedUser && registedUser.length > 0) { throw new InvalidInputError('This email address already registered.'); } 

            user.$userType = UserType.USER;
            // user.$createdOn = new Date();
            user.$password = await bcrypt.hash(user.$password, 8);
            // user.$emailVerificationToken = randomstring.generate({length: 64, charset: 'alphanumeric'});

            await new MongoDBUtils().insert(user, 'users');
            // new EmailService().confirmEmail(user.$emailAddress, user.$name, `https://byteprojects.in/verify-email?email-address=${user.$emailAddress}&token=${user.$emailVerificationToken}`);
            return new DRResponse(200, 'User has been created successfullly. Please check you email to verify email-address.');

        } catch (error) {
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async login(request: any): Promise<DRResponse> {
        try {
            // fetching user using email id
            if(!request.emailAddress) { throw new InvalidInputError('emailAddress is required'); }
            if(!request.password) { throw new InvalidInputError('password is required'); }
            
            let registedUsers: any[] = await new MongoDBUtils().filter({emailAddress: request.emailAddress}, 'users');
            if(!registedUsers || registedUsers.length !== 1) { throw new InvalidInputError('In-correct email-address'); }
            
            let user: UserDetails = new UserDetails(registedUsers[0]);
            let isPasswordMatched = await bcrypt.compare(request.password, user.$password);
            if(!isPasswordMatched) { throw new InvalidInputError('In-correct password');  }

            // if([AccountStatus.DISABLED].includes(user.$accountStatus)) { throw new InvalidInputError('Your account is disabled.'); }
            
            //generating json token
            const token = this.generateToken(user.$name, user.$emailAddress, UserType.USER);
            return new DRResponse(200, 'User has been logged in successfullly', null, {token: token});
        } catch (error) {
            console.log(error);
            return new CommonUtils().prepareErrorMessage(error);
        }
    }

    async resetPassword() {

    }

    async verifyResetEmail() {

    }

    async updatePassword() {

    }

    private generateToken(name: string, emailAddress: string, accountType: UserType) {
        return jwt.sign(
            {
                name: name,
                emailAddress: emailAddress,
                accountType: accountType
            },
            process.env.JWT_SECRET, { expiresIn: '2h', algorithm: 'HS256' }
        );

    }
}