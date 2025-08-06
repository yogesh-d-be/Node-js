const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post("/register", userController.userRegisterController);

router.post("/login", userController.userLoginController);




module.exports = router;
