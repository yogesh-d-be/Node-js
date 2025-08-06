const { generateToken } = require("../middleware/auth");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');


const userRegisterController = async(req, res) =>{
try {
    const user = req.body;

    // console.log("user before:", user);

    const hashedPassword = await bcrypt.hash(user.password, 10)

    user.password = hashedPassword

    // console.log("user after:", user);

    const userData = await new UserModel(user).save();

    res.status(201).send({message:"User Data created successfully", data:userData}); 
} catch (error) {
    res.status(500).send("Error when creating user", error)
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

    res.status(200).send({message:"User login successfully", data:{token: token}}); 
} catch (error) {
    res.status(error.statusCode || 500).send({message: error.message ||"Error when creating user"})
}
};



module.exports = {
    userRegisterController,
    userLoginController
}
