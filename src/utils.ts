import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import { adjectives, nouns } from "./words";

export const generateSecret = (): string => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMailFn = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "airbnbClone@airbnbClone.com",
    to: address,
    subject: "🔐Airbnb Clone의 로그인 시크릿 키🔐",
    html: `안녕하세요 고객님의 로그인 시크릿 키는 <strong>${secret}</strong> 입니다.`
  };
  return sendMailFn(email);
};
