const { generateToken } = require("../middleware/auth");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const mail = require("../utils/mailService");


const userRegisterController = async(req, res) =>{
try {
    const user = req.body;

    // console.log("user before:", user);

    const hashedPassword = await bcrypt.hash(user.password, 10)

    user.password = hashedPassword

    // console.log("user after:", user);

    const userData = await new UserModel(user).save();

    return res.status(201).send({message:"User Data created successfully", data:userData}); 
} catch (error) {
   return res.status(500).send("Error when creating user", error)
}
};


const userLoginController = async(req, res) =>{
try {
    
    const {mobileNumber, password} = req.body;

    const existUser = await UserModel.findOne({mobileNumber:mobileNumber});

    if(!existUser){
        const error = new Error("You are not registered");
        error.statusCode = 404;
        throw error;
    }

    const comparePassword = await bcrypt.compare(password, existUser.password );

    if(!comparePassword){
        const error = new Error("Incorrect credentials");
        error.statusCode = 401;
        throw error;
    }

    const token = await generateToken(existUser._id);

    return res.status(200).send({message:"User login successfully", data:{token: token}}); 
} catch (error) {
    return res.status(error.statusCode || 500).send({message: error.message ||"Error when creating user"})
}
};


const showProfileController = async (req, res) => {
    try {
        const userId = req.user.id;
       const showUser = await UserModel.findById(userId).select({password: 0});
       await mail();
       return res.status(200).send({message:"User profile get successfully", data:showUser});
    } catch (error) {
        return res.status(error.statusCode || 500).send({message: error.message ||"Error when showing user"})
    }
}



module.exports = {
    userRegisterController,
    userLoginController,
    showProfileController
}
