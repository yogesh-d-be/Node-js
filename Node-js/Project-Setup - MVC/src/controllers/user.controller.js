const UserModel = require("../models/user.model");


const userCreateController = async(req, res) =>{
    const userData = req.body;
    const storeData = new UserModel(userData);
    await storeData.save();

    res.status(201).send("User Data created successfully");
};

module.exports = {
    userCreateController
}
