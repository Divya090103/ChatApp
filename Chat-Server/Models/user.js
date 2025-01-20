const mongoose=require('mongoose');
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
  FirstName:{
    type:String,
    required:[true, "First name is required"]
  },
  LastName:{
    type:String,
    required:[true, "Last name is required"]
  },
  Email:{
    type:String,
    required:[true,"Email is required"],
    //check the mail validation
    validate:{
      validate: function (Email){
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Test the email against the regex
        return regex.test(Email);
      },
      message:"Email is invalid"
    }
  },
  avatar:{
    type:String
  },
  password:{
    type:String
  },
  Validate:{
    type:Boolean,
    required:[false,"Validation is required"]

  },
  Otp:{
    type:Number,
  },
  Opt_expires_time:{
    type:Date
  },
  Otp_verfied:{
    type:Boolean,
  }
})

//pre function 

userSchema.pre("save" , async function (next){
    // Only run this function if otp was actually modified
  if (!this.isModified("otp") || !this.otp) return next();
  const salt = await bcrypt.genSalt(10);
this.otp=await bcrypt.hash(this.otp,salt);
console.log(this.otp.toString(), "FROM PRE SAVE HOOK");
next();
})


userSchema.pre("save",async function (next) {
  if(this.isModified("password")||!this.password)
 return next();

  this.password=hashPassword(this.password);
})



userSchema.methods.correctOTP = async function (candidateOTP, userOTP) {
  return await bcrypt.compare(candidateOTP, userOTP);
};



async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10);  // Generate salt with a 10-round strength
  const hashedPassword = await bcrypt.hash(plainPassword, salt);  // Hash the password
  return hashedPassword;
}

// Function to compare the entered password with the stored (hashed) password
userSchema.method.validatePassword=async function (enteredPassword, storedHashedPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);  // Compare password
  return isMatch;  // Returns true if passwords match, false otherwise
}

const User=new mongoose.model("User",userSchema);
module.exports=User