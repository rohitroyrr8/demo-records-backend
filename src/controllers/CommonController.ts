import * as express from 'express';
import { DRResponse } from '../models/DRResponse';
import { CommonService } from '../services/CommonService';
import { UserService } from '../services/UserService';

export default function CommonController(app: express.Application) {
    app.post('/v1/update-password', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let emailAddress: any = req.user.emailAddress;
        let response: DRResponse = await new CommonService().updatePassword(emailAddress, request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/update-settings', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/send-otp', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/verify-otp', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });


}