const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mobileNumber:{
        type:Number,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:16
    }
},{
    collection:"Register"
});

const UserModel = mongoose.model("Register", userSchema);

module.exports = UserModel;