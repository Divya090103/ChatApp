const express = require("express");
const router = express.Router();
const authcontroller= require("../Controllers/auth");
router.post("/registerUser",authcontroller.registerUser,authcontroller.SendOTP,authcontroller.SendMail);


module.exports=router;