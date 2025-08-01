const UserModel = require("../models/user.model");


const userCreateController = async(req, res) =>{
try {
    const userData = req.body;
    const storeData = new UserModel(userData);
    await storeData.save();

    res.status(201).send("User Data created successfully"); 
} catch (error) {
    res.status(500).send("Error when creating user")
}
};

const showUserController = async (req, res) => {
    try {
        // const showUser = await UserModel.find(); //show the all data
        const showUser = await UserModel.findOne({email:"yogesh@gmail.com"}); //find the matched data only
        // const id = req.params.id; //params
        // const showUser = await UserModel.findById(id); // to find the data based on object Id or _id
        res.status(200).send({data:showUser})
    } catch (error) {
        res.status(500).send("Error when get users")
    }
}

// const updateUserController = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const {name} = req.body;
//         const updateUser = await UserModel.findByIdAndUpdate(id,{name: name},{new: true});
//         res.status(200).send({data: updateUser})
//     } catch (error) {
//         res.status(500).send("Error when update users")
//     }
// }

const updateUserController = async (req, res) => {
    try {
        const {name, email} = req.body;
        const updateUser = await UserModel.findOneAndUpdate({email: email}, {name: name}, {new: true});
        res.status(200).send({data: updateUser})
    } catch (error) {
        res.status(500).send("Error when update users")
    }
}


// const deleteUserController = async (req, res) => {
//     try {
//         const {email} = req.body;
//         console.log("email", email)
//         const deleteUser = await UserModel.findOneAndDelete({email: email});
//         res.status(200).send("Data deleted")
//     } catch (error) {
//         res.status(500).send("Error when delete users")
//     }
// }

const deleteUserController = async (req, res) => {
    try {

        const id = req.params.id;
        const deleteUser = await UserModel.findByIdAndDelete(id);
        res.status(200).send("Data deleted")
    } catch (error) {
        res.status(500).send("Error when delete users")
    }
}

module.exports = {
    userCreateController,
    showUserController,
    updateUserController,
    deleteUserController
}
