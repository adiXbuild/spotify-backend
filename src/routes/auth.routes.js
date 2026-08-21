const express = require("express");
const router = express.Router();
const authController = require('../controller/auth.controller')

const { registerUser } = require("../controller/auth.controller");

console.log(registerUser);

router.post("/register", registerUser);

router.post("/login", authController.loginUser);

router.post("/logout", authController.logoutUser);

module.exports = router;