import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import expressJWT = require('express-jwt');
import * as http from 'http';
import * as jwt from 'jsonwebtoken';
import log4js = require('log4js');
import util = require('util');
const bearerToken = require('express-bearer-token');
import cors = require('cors');
import controllers from './src/controllers';

dotenv.config();
const logger = log4js.getLogger('DEMO API');

const app = express();

app.options('*', cors());
app.use(cors());
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(expressJWT({
    secret: process.env.JWT_SECRET,
}).unless({
    path: [
            '/v1/register',
            '/v1/login',
            '/v1/forget-password',
            '/v1/reset-password',

            '/user/auth',
            '/user/forget-pasword',
            '/user/verify-email',
            '/user/send-otp',
            '/user/verify-otp',
            
            '/admin/auth',
            '/admin/update-settings',
            '/admin/update-password',
            '/admin/orders',
            '/admin/payments',
            '/admin/users',
            
            '/logs/health-status',
            '/logs/send-email',
            '/logs/confirm-email',
            '/logs/send-message'
          ],
}));
app.use(bearerToken());

app.use((req: any, res: any, next) => {
    logger.debug(`requesting endpoint: ${req.url}`);
    if (req.originalUrl.indexOf('/v1/register') >= 0) { return next(); }
    if (req.originalUrl.indexOf('/v1/login') >= 0) { return next(); }
    if (req.originalUrl.indexOf('/logs') >= 0) { return next(); }
    
    const token = req.token;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            let message: string = `Failed to authenticate token. Make sure to include in the authorization header.`;
            if(err.name === 'TokenExpiredError') { message = 'Session expired. Please login again.'; }
            if(err.name === 'JsonWebTokenError') { message = 'Access denied.'; }
            if(err.name === 'UnauthorizedError') { message = 'No authorization token found'; }
            
            return res.status(401).send({status: 401, message: message});
        } else {
            req.name = decoded.name
            req.emailAddress = decoded.emailAddress;
            req.accountType = decoded.accountType;
            logger.debug(`JWT token contains name: ${req.name} & emailAddress: ${req.emailAddress}`);
            return next();
        }
    });
});

controllers(app);
const server = http.createServer(app);
server.listen(process.env.SERVER_PORT, () => {
    logger.debug(`app is running on port ${process.env.SERVER_PORT}`);
});
server.timeout = 240000;
