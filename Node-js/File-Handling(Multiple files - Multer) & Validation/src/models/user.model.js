const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         unique: true,
//         required: true
//     },
//     mobileNumber:{
//         type:Number,
//         unique: true,
//         required: true
//     },
//     password:{
//         type:String,
//         required:true,
//         min:6,
//         max:16
//     }
// },{
//     collection:"Register"
// });

// const userSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         unique: true,
//         required: true
//     },
//     mobileNumber:{
//         type:Number,
//         unique: true,
//         required: true
//     },
//     otp:{
//         type:String,
//         min:6
//     },
//     otpExpiry:{
//         type:Date
//     }
// },{
//     collection:"Register"
// });
const userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    // image:{
    //     type:String
    // },
    image:{
        type:Array
    },
    email:{
        type:String,
        unique: true,
        sparse: true
        // required: true
    },
    mobileNumber:{
        type:Number,
        unique: true,
        sparse:true
        // required: true
    },
    otp:{
        type:String,
        min:6
    },
    otpExpiry:{
        type:Date
    }
},{
    collection:"Register"
});

const UserModel = mongoose.model("Register", userSchema);

module.exports = UserModel;