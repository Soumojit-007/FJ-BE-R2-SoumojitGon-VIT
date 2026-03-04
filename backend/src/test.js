import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "sanjugon2003@gmail.com", // your email
  from: process.env.EMAIL_FROM, // must match verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

try {
  await sgMail.send(msg);
  console.log("Email sent successfully ✅");
} catch (error) {
  console.error(error.response?.body || error);
}