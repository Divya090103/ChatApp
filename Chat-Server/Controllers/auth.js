const jwt=require("jsonwebtoken");
const User=require("../Models/user");
const bcrypt = require('bcryptjs');
const login=async(req,res)=>{
  const {email,password}=req.body;
  if(!email || !password) {
    res.status(400).json({
      status:"error",
      message:"both email and password are required"
    })
  }
  const user=await User.findOne({Email:email}).select("+password");
  if(!user||!validatePassword(password, user.password)) {
    res.status(400).json({
       status:"error",
       message:"user is not found with that mail or password"
    })
  }

  const token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"1h"});
res.status(200).json({
  status:"Success",
  message:"You logged Successfully",
  User:user,
  token
})


}
export  default login;
// \end{code}
