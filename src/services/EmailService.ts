import { threadId } from "worker_threads";

const nodemailer = require('nodemailer');
const fs = require('fs');
const ejs = require('ejs');

export class EmailService {
    private readonly host;
    private readonly port;
    private readonly username;
    private readonly password;
    private readonly from = 'no-reply@byteprojects.in';
    private transporter: any = null;

    constructor() {
        this.host = process.env.SMTP_HOST;
        this.port = process.env.SMTP_PORT;
        this.username = process.env.SMTP_USERNAME;
        this.password = process.env.SMTP_PASSWORD;

        if(!this.host || !this.password || !this.username || !this.port) { throw new Error('SMTP credentials are not defined.'); }

        this.transporter = nodemailer.createTransport({
            host: this.host,
            port: this.port,
            auth: {
                user: this.username,
                pass: this.password
            }
        });

    }

    async confirmEmail(to: string, name: string, url: string) {
        await this.sendEmail('./src/templates/emails/confirm-email.ejs', this.from, to, `Welcome to SendGrid! Confirm Your Email`, {name: name, url: url}, this.transporter);
    }

    async forgetPassword(to: string, name: string, url: string) {
        await this.sendEmail('./src/templates/emails/forget-password.ejs', this.from, to, 'Use this to reset your passowrd', {name: name, url: url}, this.transporter);
    }

    async passwordResetSuccessfull(to: string, name: string) {
        await this.sendEmail('./src/templates/emails/success-reset-password.ejs', this.from, to, 'Your password has been reset successfully', {name: name}, this.transporter);
    }

    async depositSuccess(to: string, name: string) {
        await this.sendEmail('./src/templates/emails/success-deposit.ejs', this.from, to, 'Deposit of 1000 INR complete', {name: name}, this.transporter);
    }

    async depositFailure(to: string, name: string) {
        await this.sendEmail('./src/templates/emails/failure-deposit.ejs', this.from, to, 'Deposit of 1000 INR failed', {name: name}, this.transporter);
    }

    async withdrawSuccess(to: string, name: string) {
        await this.sendEmail('./src/templates/emails/success-deposit.ejs', this.from, to, 'Withdraw of 1000 INR complete', {name: name}, this.transporter);
    }

    async successBuy(to: string, name: string) {
        await this.sendEmail('./src/templates/emails/success-buy.ejs', this.from, to, 'Buy Order is complete', {name: name}, this.transporter);
    }

    async successSell(to: string, name: string) {
        await this.sendEmail('./src/templates/emails/success-sell.ejs', this.from, to, 'Sell order is complete', {name: name}, this.transporter);
    }

    private async sendEmail(templatePath: string, from: string, to: string, subject: string, values: any, transporter: any ): Promise<void> {
        fs.readFile(templatePath, 'utf8', async function (err, data) {
            if (err) { return console.log(err); }
            
            var mainOptions = {
                from: `Byteprojects Tech <${from}>`,
                to: to,
                subject: subject,
                html: ejs.render(data, {values: values})
            }
            
            await transporter.sendMail(mainOptions);
        });
        return;
    }
}