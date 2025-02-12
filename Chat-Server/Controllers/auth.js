const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const otpGenerator = require("otp-generator");
const sendmail = require("../Services/mail");
// const hashPassword=require("../Models/")
//Register the new user
//signUp=>register=>sentOTP=>VerifyOtp=>protected->login
exports.registerUser = async (req, res, next) => {
  try {
    const { FirstName, LastName, Email, avatar, password } = req.body || {};
    if (!FirstName || !LastName || !Email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check if user is already exist or not
    const userExist = await User.findOne({ Email: Email });
    if (userExist) {
      res.status(400).json({
        status: "errror",
        message: "The user is already exists and verified,please Login",
      });
    } else {
      const new_user = await User.create({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        avatar: avatar,
        password: password,
      });

      req.Email = new_user.Email;
      next();
    }
  } catch (error) {
    res.send("error");
  }
};

//generate the otp

exports.SendOTP = async (req, res, next) => {
  console.log("generatet the otp");
  try {
    const { userId } = req;
    //generated otp
    const otp = otpGenerator.generate(6, {
      upperCase: true,
      specialChars: false,
    });
    //send this otp via mail
    const expires_time = Date.now() + 10 * 60 * 1000; //10min validate
    //update in the database

    const user = await User.findOne({ userId });
    if (!user) {
      res.status(400).json({ status: failure, message: "user is not exixts" });
    }

    user.Otp = otp;
    user.expires_time = expires_time;

    await user.save();
    res.locals.email = user.Email;
    res.locals.otp = otp;
    next();
  } catch (error) {
    console.error("Error in SendOTP:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.SendMail = async (req, res) => {
  const { email, otp } = res.locals;

  try {
    const user = await User.findOne({Email:email});

    if (!user||user.expires_time < Date.now()) { //check if user is not exists or otp is expired
      console.log("❌ User does not exist or OTP expired.");
      res.status(400).json({
        status: "failure",
        message: "user is not exists or otp is expired",
      });
    }
    //send mail to the user Nodemailer configuration

    await sendmail(email, otp);

    res.status(200).json({
      status: "success",
      message: "OTP  email sent successfully",
    });
  } catch (error) {
    console.error("Error in SendMail:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};





//verify the otp
exports.VerifyOtp = async (req, res, next) => {
  if (!(await user.correctOTP(otp, user.otp))) {
    res.status(400).json({
      status: "failure",
      message: "otp is unverified",
    });
  }

  user.Validate = true;
  await user.save({ Validate: true });
};

//login the existing user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: "error",
      message: "both email and password are required",
    });
  }
  const user = await User.findOne({ Email: email }).select("+password");
  if (!user || !user.validatePassword(password, user.password)) {
    res.status(400).json({
      status: "error",
      message: "user is not found with that mail or password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  res.status(200).json({
    status: "Success",
    message: "You logged Successfully",
    User: user,
    token,
  });
  next();
};

// now as the some of the routes must be protected as user can visit only when
// they are logged in and some of them can  be public anyone can visit as to register themselves

const authenticate = async (req, res, next) => {
  //get the token from the storage i.e jwt token that we gave to user when they are logged in
  let token;
  if (
    req.header.authorizations &&
    req.header.authorization.startswith("Bearer")
  ) {
    token = req.header.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    //if not present in header check in cookies thart store the info of web page
    token = req.cookies.jwt;
  } else {
    res.status(400).json({
      status: "error",
      message: "You are not logged in!Please login to  access this page",
    });
    return;
  }

  //2)verify the tokem
};

//Forgot the password functionality
exports.forgotPassword = async (req, res, next) => {
  const { mail } = req.body;
  const user = await User.findOne({ Email: mail });
  if (!user) {
    res.status(400).json({
      status: "error",
      message: "email does not exist",
    });
  }
  //generate a token of reset password
  const resetToken = user.generateResetToken();
  const resettime = Date.now() + 10 * 60 * 1000; //10 minutes from now
  const reseturl = `http://Chit-Chat/resetpassword/${resetToken}`;

  try {
    //to send the reset url
    await sendEmail(mail, reseturl, resettime);
    res
      .status(200)
      .json({ status: "success", message: "reset url sent to your email" });
  } catch (error) {
    user.resetToken = undefined;
    user.resettime = undefined;
    await user.save();
    res.status(500).json({
      status: "error",
      message: "Backend errror",
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  const user = await User.findOne(
    User,
    { resetToken: req.params.token },
    { resetTime: { $gt: Date.now() } }
  );

  //if user has not same reset token or the out of the reset time
  if (!user) {
    res.status(400).json({
      status: "error",
      message: "user is not found",
    });
  }
  user.password = req.body.password;
  user.passwordConfrm = req.body.passwordconfrm;
  user.resetToken = undefined;
  user.resettime = undefined;
  try {
    await user.save();

    //todo send mail for conforming the user for the password change
    res.status(400).json({
      status: "ok",
      message: "Password changes successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Backend error",
    });
  }
};

// \end{code}
