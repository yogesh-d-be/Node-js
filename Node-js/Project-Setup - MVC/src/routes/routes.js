const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post("/user", userController.userCreateController)

module.exports = router;
