const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.mailid, // Your email
        pass: process.env.mailpassword // Your App Password (not your regular password)
    }
});

// Email options
const mailOptions = {
    from: process.env.mailid, // Your email
    to: "recipient-email@example.com",
    subject: "Test Email using Nodemailer",
    text: "Hello, this is a test email sent using Nodemailer!"
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log("Email sent: " + info.response);
    }
});

