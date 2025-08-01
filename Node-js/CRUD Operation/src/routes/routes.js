const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post("/user", userController.userCreateController);

router.get("/showuser", userController.showUserController);

// router.put("/updateuser/:id", userController.updateUserController);
router.put("/updateuser", userController.updateUserController);

router.delete("/deleteuser/:id", userController.deleteUserController)


module.exports = router;
