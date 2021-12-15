import { APIService } from "./APIService";

var axios = require('axios');

export class MessageService {
    private apiUrl: string ='https://api.textlocal.in/send/?';
    private type: string = 'POST';
    private api_key = process.env.TXT_API_KEY;
    private sender = 'BYTPRO';

    
    async sendMessage(counterCode: number, mobileNumber: number, content: string) {
        let url: string = `${this.apiUrl}apikey=${this.api_key}&sender=${this.sender}&numbers=${counterCode}${mobileNumber}&message=${content}`;
        console.log(url);
        await new APIService().get(url);
        return;
    }

}