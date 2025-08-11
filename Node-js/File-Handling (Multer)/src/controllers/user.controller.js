// const { generateToken } = require("../middleware/auth");
const UserModel = require("../models/user.model");
// const bcrypt = require('bcrypt');
// const mail = require("../utils/mailService");
// const generateOtp = require("../utils/otpGeneration");


// const userRegisterController = async(req, res) =>{
// try {
//     const user = req.body;
//     const existUser = await UserModel.findOne({mobileNumber:user.mobileNumber});

//     if(existUser){
//         const error = new Error("You are already registered");
//         error.statusCode = 400;
//         throw error;
//     }

//     // console.log("user before:", user);

//     const hashedPassword = await bcrypt.hash(user.password, 10)

//     user.password = hashedPassword

//     // console.log("user after:", user);

//     const userData = await new UserModel(user).save();

//     return res.status(201).send({message:"User Data created successfully", data:userData}); 
// } catch (error) {
//    return res.status(500).send("Error when creating user", error)
// }
// };


// const userLoginController = async(req, res) =>{
// try {
    
//     const {mobileNumber, password} = req.body;

//     const existUser = await UserModel.findOne({mobileNumber:mobileNumber});

//     if(!existUser){
//         const error = new Error("You are not registered");
//         error.statusCode = 404;
//         throw error;
//     }

//     const comparePassword = await bcrypt.compare(password, existUser.password );

//     if(!comparePassword){
//         const error = new Error("Incorrect credentials");
//         error.statusCode = 401;
//         throw error;
//     }

//     const token = await generateToken(existUser._id);

//     return res.status(200).send({message:"User login successfully", data:{token: token}}); 
// } catch (error) {
//     return res.status(error.statusCode || 500).send({message: error.message ||"Error when creating user"})
// }
// };

// //sendotp
// const userLoginWithOtpController = async(req, res) =>{
// try {
    
//     const {email} = req.body;

//     const existUser = await UserModel.findOne({email:email});

//     if(!existUser){
//         const error = new Error("You are not registered");
//         error.statusCode = 404;
//         throw error;
//     }

//     const otp = await generateOtp();

//      existUser.otp = otp;
//      existUser.otpExpiry = new Date(Date.now()+5*60*1000 )

//      await existUser.save();

//     const sendOtp = await mail(email, otp);

//     return res.status(200).send({message:"User login successfully"}); 
// } catch (error) {
//     return res.status(error.statusCode || 500).send({message: error.message ||"Error when creating user"})
// }
// };


// const userVerifyOtpController = async(req, res) => {
//     try {
//         const {email, otp} = req.body;

//         console.log("b", req.body)

//         const existUser = await UserModel.findOne({email:email});
//         if(!existUser){
//         const error = new Error("You are not registered");
//         error.statusCode = 404;
//         throw error;
//         }

//         if(existUser.otp !== otp){
//         const error = new Error("Incorrect otp");
//         error.statusCode = 400;
//         throw error;
//         }

//         if(Date.now() > existUser.otpExpiry){
//             return res.status(400).send({message:"otp expired"})
//         // const error = new Error("otp expired");
//         // error.statusCode = 400;
//         // throw error;
//         }

//         const token = await generateToken(existUser._id);

//         return res.status(200).send({message:"Otp verified successfully", data:{token:token} })

//     } catch (error) {
//         return res.status(500).send("Error when verify otp", error)
//     }
// }


// const showProfileController = async (req, res) => {
//     try {
//         const userId = req.user.id;
//        const showUser = await UserModel.findById(userId).select({password: 0});
//        return res.status(200).send({message:"User profile get successfully", data:showUser});
//     } catch (error) {
//         return res.status(error.statusCode || 500).send({message: error.message ||"Error when showing user"})
//     }
// }

const registerUserDetailsController = async (req, res) => {
    try {
        const userData = req.body;
        userData.image = req.file.filename;
        const storeData = new UserModel(userData);
        await storeData.save();

        return res.status(200).send({message:"Data uploaded successfully"});
    } catch (error) {
        return res.status(error.statusCode || 500).send({message: error.message ||"Error when regsitering user"})
    }
}

module.exports = {
    // userRegisterController,
    // userLoginController,
    // userLoginWithOtpController,
    // userVerifyOtpController,
    // showProfileController,
    registerUserDetailsController
}
