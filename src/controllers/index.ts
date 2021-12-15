import * as express from 'express';
import { EmailService } from '../services/EmailService';
import { MessageService } from '../services/MessageService';
import { MongoDBUtils } from '../utils/MongoUtils';
const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

import authenticationHandler from './AuthenticationController';
import userHandler from './UserController';
import commonHandler from './CommonController';
import { DRResponse } from '../models/DRResponse';

export default function entryPoint(app: express.Application) {
    app.get('/logs/health-status', async function (req: express.Request, res: express.Response) {
        let response: any = { status: 200, message: 'Welcome to DEMO backend node API.', body: { version: '2.2.0', author: { name: 'Byteprojects Technologies'}}};
        // let data: any[] = [];
        
        // let margin = 20;
        // let size = 20;

        // for(var i=0; i<80; i++) {
        //     for(var j=0; j<80; j++) {
        //         let object: any = {};
                
                
        //         object.lng = i*size + margin;
        //         object.lat = j*size + margin;    
        //         object.size = size;
        //         // object.color =  Math.random()*100 % 2 ? "#29c262" : "#19182c";
        //         object.color = "#19182c";
                
        //         // if((i >30 && i < 70) && (j >30 && j < 70)) {
        //         //     object.color = "#29c262"
        //         // }

        //         // if(i <30 && j <30 ) {
        //         //     object.color = "#29c262"
        //         // }

        //         // if(i >70 && j <30 ) {
        //         //     object.color = "#29c262"
        //         // }

        //         // if(i <30 && j >70 ) {
        //         //     object.color = "#29c262"
        //         // }

        //         // if(i >70 && j >70 ) {
        //         //     object.color = "#29c262"
        //         // }
                
        //         // Tower 1
        //         if( i <40 && j< 40) {
        //             object.color = "#29c262"

        //             let times = 3;
        //             if((i >= 1 && i < 1 + times) && (j >= 1 && j < 1 + times)) {
        //                 if(i === 1 && j === 1) {
        //                     object.lng = i*size + margin;
        //                     object.lat = j*size + margin;  
        //                     object.size = size * times + margin;
        //                 } else {
        //                     continue;
        //                 }
        //             }

        //             times = 10;
        //             if((i >= 9 && i < 9 + times) && (j >= 9 && j < 9 + times)) {
        //                 if(i === 9 && j === 9) {
        //                     object.lng = i*size + margin;
        //                     object.lat = j*size + margin;  
        //                     object.size = size * times + margin;
        //                 } else {
        //                     continue;
        //                 }
        //             }

        //             times = 4;
        //             if((i >= 4 && i < 4 + times) && (j >= 30 && j < 30 + times)) {
        //                 if(i === 4 && j === 30) {
        //                     object.lng = i*size + margin;
        //                     object.lat = j*size + margin;  
        //                     object.size = size * times + margin;
        //                 } else {
        //                     continue;
        //                 }
        //             }

        //             times = 4;
        //             if((i >= 24 && i < 24 + times) && (j >= 7 && j < 7 + times)) {
        //                 if(i === 24 && j === 7) {
        //                     object.lng = i*size + margin;
        //                     object.lat = j*size + margin;  
        //                     object.size = size * times + margin;
        //                 } else {
        //                     continue;
        //                 }
        //             }

        //             times = 4;
        //             if((i >= 31 && i < 31 + times) && (j >= 34 && j < 34 + times)) {
        //                 if(i === 31 && j === 34) {
        //                     object.lng = i*size + margin;
        //                     object.lat = j*size + margin;  
        //                     object.size = size * times + margin;
        //                 } else {
        //                     continue;
        //                 }
        //             }


        //             times = 5;
        //             if((i >= 20 && i < 20 + times) && (j >= 20 && j < 20 + times)) {
        //                 if(i === 20 && j === 20) {
        //                     object.lng = i*size + margin;
        //                     object.lat = j*size + margin;  
        //                     object.size = size * times + margin;
        //                 } else {
        //                     continue;
        //                 }
        //             }

                    

                    
                    
        //             if(i == 39 || j == 39) {  object.color = "#19182c"; }
                    
        //         }
                
        //         // Tower 2
        //         if( i <40 && (j >=40 && j< 80)) {
        //             // object.color = "#29c262"
        //             object.color ="#aaaaaa"; //gray for disabled araed

        //             if(i == 39 || j == 40) {  object.color = "#19182c"; }
                
        //         }

        //         // Tower 3
        //         if((i >=40 && i < 80 ) && j< 40) {
        //             // object.color = "#29c262"
        //             object.color ="#aaaaaa"; //gray for disabled araed

        //             if(i == 40 || j == 39) {  object.color = "#19182c"; }
                
        //         }
                
        //         // Tower 4
        //         if((i >=40 && i < 80 ) && (j >=40 && j< 80)) {
        //             // object.color = "#29c262"
        //             object.color ="#aaaaaa"; //gray for disabled araed

        //             if(i == 40 || j == 40) {  object.color = "#19182c"; }
                
        //         }

        //         data.push(object);
        //     }
        // }

        // let response: DRResponse = new DRResponse(200, 'Data fetched successfully', null, data);
        return res.status(200).send(response);
    });
    
    app.post('/user/mongo', async function (req: express.Request, res: express.Response) {
        // new MongoDBUtils().insert(req.body, 'users');
        let response: any[] = await new MongoDBUtils().filter({}, 'users');
        await new MongoDBUtils().delete(response[0], 'users');
        return res.status(200).send('deleted');  
    });

    app.post('/logs/confirm-email', async function (req: express.Request, res: express.Response) {
        
         new EmailService().confirmEmail('rohitroyrr8@gmail.com', 'Rohit Roy', 'https://byteprojects.in?verify-email?token=551d374c-8e09-4980-8557-c9da2fb43613-2748932644');
         return res.status(200).send('sent');  
     });

     app.post('/logs/send-message', async function (req: express.Request, res: express.Response) {
        
        new MessageService().sendMessage(91, 7876435599, 'This is the test message');
        return res.status(200).send('sent');  
    });

    authenticationHandler(app);
    userHandler(app);
    commonHandler(app);
}