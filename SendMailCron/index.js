const express = require("express");
const nodemailer = require("nodemailer");
const cron = require("node-cron");

app = express();

cron.schedule("*/10 * * * * *", () => {
  console.log('"SEND EMAIl EVERY ---> 10 Seconds"');
  sendEmail();
});

const sendEmail = () => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "saqibahmedaarhan@gmail.com",
      pass: "lgftwhwipdzzffqw"
    },
  });

  let mailDetails = {
    from: "saqibahmedaarhan@gmail.com",
    to: "saqib.ahmed@classicinformatics.com",
    subject: "TESTING CRON JOBS EMAIL...",
    text: "Node.js Cron Job Email" + " Testing for Practice",
    html: "<b>Hello USER ?</b>"
  };

  mailTransporter.sendMail(mailDetails, (err) => {
    if (err) {
      console.log("Error Occurred", err);
    } else {
      console.log("Email Sent SuccessFully...");
    }
  });
};

app.listen(3001);

//process.env.USER
//process.env.PASS,
