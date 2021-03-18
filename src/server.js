const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
  port: 587,
  secure: false,
});

let mailOptions = {
  from: process.env.GMAIL_USERNAME,
  to: "abcd@masaischool.com",
  subject: "NODE JS test email",
  text: "Finally Test Mail",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email Sent: " + info.response);
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

const start = async () => {
  app.listen(2244, () => {
    console.log("Listening on port 2244...");
  });
};

module.exports = start;
