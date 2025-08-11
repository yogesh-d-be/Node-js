const express = require('express');
const userController = require('../controllers/user.controller');
// const { verifyToken } = require('../middleware/auth');
const upload = require('../middleware/fileStroage');
const router = express.Router();

// router.post("/register", userController.userRegisterController);

// router.post("/login", userController.userLoginController);

// router.post("/otplogin", userController.userLoginWithOtpController);

// router.post("/verifyotp", userController.userVerifyOtpController);

// router.get("/profile",verifyToken, userController.showProfileController);

// multipart/form-data

router.post("/userdata", upload.single("image"), userController.registerUserDetailsController);


module.exports = router;
