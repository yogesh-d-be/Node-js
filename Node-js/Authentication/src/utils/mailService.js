const nodemailer = require('nodemailer');


const user_mail = process.env.MAIL_USER;
const mail_pass_key = process.env.MAIL_PASS_KEY;

const transaport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: user_mail,
        pass: mail_pass_key
    }
});

const mailOptions = {
    from:user_mail,
    to:"yogesh@yopmail.com",
    subject:"testing",
    text:"Hi"
}

const mail = () => transaport.sendMail(mailOptions,(err, info) =>{
    if(err){
        console.log("err", err)
    }
    console.log("info", info)
})

module.exports = mail;