
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const sendOTPEmail = require("../Utility/sendOTPEmail");

// const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// exports.sendOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const otp = generateOTP();
//     const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

//     let user = await User.findOne({ email });
//     if (!user) {
//       user = new User({ email, otp, otpExpires });
//     } else {
//       user.otp = otp;
//       user.otpExpires = otpExpires;
//     }

//     await user.save();
//     await sendOTPEmail(email, otp);

//     res.status(200).json({ message: "OTP sent to email" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to send OTP", error: err.message });
//   }
// };

// exports.verifyOtpAndRegister = async (req, res) => {
//   try {
//     const { email, otp, name, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || user.otp !== otp || user.otpExpires < new Date()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.name = name || user.name;
//     user.password = password ? await bcrypt.hash(password, 10) : user.password;
//     user.otp = null;
//     user.otpExpires = null;

//     await user.save();
//     res.status(200).json({ message: "Registration complete" });
//   } catch (err) {
//     res.status(500).json({ message: "Registration failed", error: err.message });
//   }
// };

// exports.requestLoginOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log("this si email"+email)
//     const otp = generateOTP();
//     const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

//     let user = await User.findOne({ email });
//      console.log("this is user"+user)
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.otp = otp;
//     user.otpExpires = otpExpires;

//     await user.save();

//     console.log("this is saved user:"+user)
//     await sendOTPEmail(email, otp);

//     res.status(200).json({ message: "OTP sent to email" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to send OTP", error: err.message });
//   }
// };

// exports.verifyLoginOtp = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || user.otp !== otp || user.otpExpires < new Date()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.otp = null;
//     user.otpExpires = null;
//     await user.save();

//     const token = jwt.sign(
//   { id: user._id, role: user.role }, // include role here
//   process.env.JWT_SECRET,
//   { expiresIn: "7d" }
// );


//     res.status(200).json({ message: "Login successful", token, user });
//   } catch (err) {
//     res.status(500).json({ message: "OTP verification failed", error: err.message });
//   }
// };

// // 🆕 New APIs for User Management
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch users", error: err.message });
//   }
// };

// exports.updateUserStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     const user = await User.findByIdAndUpdate(id, { status }, { new: true });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: "Status update failed", error: err.message });
//   }
// };

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const sendOTPEmail = require("../Utility/sendOTPEmail");

// const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// // ✅ 1. Send OTP
// exports.sendOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const otp = generateOTP();
//     const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

//     let user = await User.findOne({ email });
//     if (!user) {
//        user = new User({ email, otp, otpExpires });
//     } else {
//       user.otp = otp;
//       user.otpExpires = otpExpires;
//     }

//     await user.save();
//     await sendOTPEmail(email, otp);

//     res.status(200).json({ message: "OTP sent to email" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to send OTP", error: err.message });
//   }
// };

// // ✅ 2. Verify OTP and Register (with role)
// exports.verifyOtpAndRegister = async (req, res) => {
//   try {
//     const { email, otp, name, password, role } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || user.otp !== otp || user.otpExpires < new Date()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.name = name || user.name;
//     user.password = password ? await bcrypt.hash(password, 10) : user.password;
//     user.role = role || user.role || "customer"; // ✅ support role here
//     user.otp = null;
//     user.otpExpires = null;

//     await user.save();
//     res.status(200).json({ message: "Registration complete" });
//   } catch (err) {
//     res.status(500).json({ message: "Registration failed", error: err.message });
//   }
// };

// // ✅ 3. Request Login OTP
// exports.requestLoginOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const otp = generateOTP();
//     const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.otp = otp;
//     user.otpExpires = otpExpires;
//     await user.save();
//     await sendOTPEmail(email, otp);

//     res.status(200).json({ message: "OTP sent to email" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to send OTP", error: err.message });
//   }
// };

// // ✅ 4. Verify Login OTP and Issue Token (with role)
// exports.verifyLoginOtp = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || user.otp !== otp || user.otpExpires < new Date()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.otp = null;
//     user.otpExpires = null;
//     await user.save();

//     const token = jwt.sign(
//       { id: user._id, role: user.role }, // ✅ role included
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.status(200).json({ message: "Login successful", token, user });
//   } catch (err) {
//     res.status(500).json({ message: "OTP verification failed", error: err.message });
//   }
// };

// // ✅ 5. Get All Users (for Admin)
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch users", error: err.message });
//   }
// };

// // ✅ 6. Update User Status (optional)
// exports.updateUserStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     const user = await User.findByIdAndUpdate(id, { status }, { new: true });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: "Status update failed", error: err.message });
//   }
// };




const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// ✅ ADMIN REGISTER
exports.registerAdmin = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    // 🔥 Only ONE admin allowed
    // const existingAdmin = await User.findOne();

    // if(existingAdmin){
    //   return res.status(400).json({
    //     message:"Admin already exists"
    //   });
    // }

    const hashedPassword = await bcrypt.hash(password,10);

    const admin = await User.create({
      name,
      email,
      password:hashedPassword
    });

    res.status(201).json({
      message:"Admin registered successfully"
    });

  } catch (err) {

    res.status(500).json({
      message:"Registration failed",
      error:err.message
    });

  }
};



// ✅ ADMIN LOGIN
exports.loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await User.findOne({email});

    if(!admin){
      return res.status(400).json({
        message:"Invalid email or password"
      });
    }

    if(admin.status === "blocked"){
      return res.status(403).json({
        message:"Admin is blocked"
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if(!isMatch){
      return res.status(400).json({
        message:"Invalid email or password"
      });
    }

    const token = jwt.sign(
      {id:admin._id},
      process.env.JWT_SECRET,
      {expiresIn:"7d"}
    );

    res.status(200).json({
      message:"Login successful",
      token,
      admin
    });

  } catch (err) {

    res.status(500).json({
      message:"Login failed",
      error:err.message
    });

  }

};




// ✅ GET ADMIN PROFILE (Protected)
exports.getAdminProfile = async (req,res)=>{
  try{

    const admin = await User.findById(req.user.id).select("-password");

    res.json(admin);

  }catch(err){
    res.status(500).json({
      message:"Failed to fetch profile"
    });
  }
};
