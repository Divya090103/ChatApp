const express = require("express");
const router = express.Router();
const authcontroller= require("../Controllers/auth");
router.post("/registerUser",authcontroller.registerUser)
// router.post("/register",authcontroller.register);
// router.post("/send-mail",authcontroller.sendMail);

module.exports=router;