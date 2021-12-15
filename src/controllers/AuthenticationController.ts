import * as express from 'express';
import { DRResponse } from '../models/DRResponse';
import { AuthenticationService } from '../services/AuthenticationService';
import { UserService } from '../services/UserService';

export default function AuthenticationController(app: express.Application) {
    app.post('/v1/login', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new AuthenticationService().login(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/register', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new AuthenticationService().register(request);
        return res.status(response.$status).send(response);
    });
}