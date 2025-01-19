const mongoose=require('mongoose');
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
  firstName:{
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
})

async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10);  // Generate salt with a 10-round strength
  const hashedPassword = await bcrypt.hash(plainPassword, salt);  // Hash the password
  return hashedPassword;
}

// Function to compare the entered password with the stored (hashed) password
async function validatePassword(enteredPassword, storedHashedPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);  // Compare password
  return isMatch;  // Returns true if passwords match, false otherwise
}

const User=new mongoose.model("User",userSchema);
module.exports=User