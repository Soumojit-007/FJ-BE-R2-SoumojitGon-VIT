import sgEmail  from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

sgEmail.setApiKey(process.env.SENDGRID_API_KEY);
export const sendEmail = async({to , subject , text , html}) =>{
    const msg = {
        to ,
        from : process.env.EMAIL_FROM,
        subject,
        text,
        html,
    };
    await sgEmail.send(msg);
}
