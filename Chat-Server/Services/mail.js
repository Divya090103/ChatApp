const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.mailid,
      pass: process.env.mailPassword,
    },
  });

async function sendmail(email,otp){
   try{ 
     await transporter.sendMail({
    from: process.env.mailid,
    to: email,
    subject: "Your OTP Code",
    text: `Hello,

    Your OTP code for Chit-Chat account is ${otp}.
    
    ⚠️ Note: This OTP is valid for only 10 minutes.
    
    Thanks & Regards,
    Team Chit-Chat`,
  });}
  catch(error){
    console.log(error);
  }
}

module.exports=sendmail;

