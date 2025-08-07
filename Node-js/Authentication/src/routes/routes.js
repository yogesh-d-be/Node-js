const express = require('express');
const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

router.post("/register", userController.userRegisterController);

router.post("/login", userController.userLoginController);

router.get("/profile",verifyToken, userController.showProfileController);




module.exports = router;
