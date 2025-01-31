const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, "First name is required"],
  },
  LastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  Email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  
  avatar: {
    type: String,
  },
  password: {
    type: String,
  },
  passwordConfrm: {
    type: String,
  },
  Validate: {
    type: Boolean,
    // required: true,
  },
  Otp: {
    type: Number,
  },
  Opt_expires_time: {
    type: Date,
  },
  Otp_verfied: {
    type: Boolean,
  },
  PasswordResetToken: {
    type: String,
  },
  PasswordResetExpires: {
    type: Date,
  },
});

//pre function

// userSchema.pre("save", async function (next) {
//   // Only run this function if otp was actually modified
//   if (!this.isModified("otp") || !this.otp) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.otp = await bcrypt.hash(this.otp, salt);
//   console.log(this.otp.toString(), "FROM PRE SAVE HOOK");
//   next();
// });

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || !this.password) return next();
console.log(this.password)
  this.password = await hashPassword(this.password);
  console.log(this.password)
});

userSchema.methods.correctOTP = async function (candidateOTP, userOTP) {
  return await bcrypt.compare(candidateOTP, userOTP);
};

async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10); // Generate salt with a 10-round strength
  const hashedPassword = await bcrypt.hash(plainPassword, salt); // Hash the password
  console.log(hashedPassword)
  return hashedPassword;
}

// Function to compare the entered password with the stored (hashed) password
userSchema.method.validatePassword = async function (
  enteredPassword,
  storedHashedPassword
) {
  const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword); // Compare password
  return isMatch; // Returns true if passwords match, false otherwise
};

//generate a reset token using the crypto
// CryptoJS already uses the native Crypto module for random number generation, since Math.random() is not crypto-safe. Further development of CryptoJS would result in it only being a wrapper of native Crypto
userSchema.method.generateResetToken = function () {
  var resettoken = CryptoJS.lib.WordArray.random(8).toString(CryptoJS.enc.Hex);
  return resettoken;
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
