import * as express from 'express';
import { DRResponse } from '../models/DRResponse';
import { UserService } from '../services/UserService';

export default function UserController(app: express.Application) {
    app.get('/v1/user/active-orders', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.get('/v1/user/transaction-history', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/user/request-withdrawal', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/user/request-deposit', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/user/submit-ticket', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/user/cancel-ticket', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.get('/v1/user/fetch-tickets', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });

    app.post('/v1/user/fetch-tickets', async function (req: express.Request, res: express.Response) {
        let request: any = req.body;
        let response: DRResponse = await new UserService().fetchActiveOrder(request);
        return res.status(response.$status).send(response);
    });    
}