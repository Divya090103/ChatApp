const jwt=require("jsonwebtoken");
const User=require("../Models/user");
const otpGenerator=require("otp-generator");
// const hashPassword=require("../Models/")
//Register the new user
exports.registerUser = async (req, res,next) => {
  const { FirstName,LastName, Email,avatar, password } = req.body;

  //check if user is already exist or not
  const userExist = await User.findOne({ Email: Email });
  if(userExist||userExist.Validate){
    res.status(400).json({
      status:"errror",
      message:"The user is already exists and verified,please Login"
    })
  }else{
const new_user=await  User.create({
  FirstName:FirstName,
  LastName:LastName,
  Email:Email,
  avatar:avatar,
  password: password
  
})
/// generate otp and sen mail to the user

next();
  }
}


//send mail and otp to the user

exports.SendOTP=async(req,res, next)=>{
  const {userId}=req
//generated otp
  const otp=otpGenerator.generate(6,{upperCase:true, specialChars:false});
//send this otp via mail
const expires_time=Date.now()+10*60*1000;  //10min validate

 const user=await User.findOneAndUpdate({userId},{otp:otp,expires_time:expires_time});


 if(!user){
  res.status(400).json({
    status:"failure"
  })
 }

}


exports.SendMail=async(req,res,next)=>{
  const {email,otp}=req;
  
const user=await User.findOne({email,
  expires_time:{$gt: Date.now()
}})


if( !user){
  res.status(400).json({
    status:"failure",
    message:"user is not exists or otp is expired"
  })
}
  
if(!await user.correctOTP(otp,user.otp)){
  res.status(400).json({
    status:"failure",
    message:"otp is unverified"
  })
}

user.Validate=true;
await user.save({Validate:true})


//send mail to the user



}





//login the existing user
exports.login=async(req,res,next)=>{
  const {email,password}=req.body;
  if(!email || !password) {
    res.status(400).json({
      status:"error",
      message:"both email and password are required"
    })
  }
  const user=await User.findOne({Email:email}).select("+password");
  if(!user||!user.validatePassword(password, user.password)) {
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
next();


}

// \end{code}
