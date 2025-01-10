const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST_NAME,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    minVersion: "TLSv1.2", 
  },
});

const sendEmail = async (
  to,
  subject,
  text,
  html,
  retries = 3,
  delay = 1000
) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      text: text,
      html: html,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);

    if (retries > 0 && shouldRetry(error)) {
      console.log(`Retrying... Attempts left: ${retries}`);
      await sleep(delay); 
      return sendEmail(to, subject, text, html, retries - 1, delay);
    } else {
      console.log(error.message);
      throw error;
    }
  }
};

const shouldRetry = (error) => {
  return (
    error.code === "ETIMEDOUT" || // Connection timeout
    error.code === "ENOTFOUND" || // DNS resolution issues
    error.code === "ECONNREFUSED" || 
    (error.responseCode && error.responseCode >= 500) // Server errors (5xx)
  );
};

//  tFunctiono add delay between retries
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = sendEmail;
