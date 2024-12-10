import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    debug: true,
    logger: true
} as SMTPTransport.Options)

type SendMailType = {
    sender: Mail.Address,
    receipient: Mail.Address,
    subject: string,
    message: string
}

export const sendMail = async (mail: SendMailType) => {
    const { sender, receipient, subject, message } = mail

    return await transporter.sendMail({
        from: sender,
        to: receipient,
        subject: subject,
        html: message
    })
}
