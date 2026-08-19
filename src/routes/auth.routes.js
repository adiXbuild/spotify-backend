const express = require("express");
const router = express.Router();

const { registerUser } = require("../controller/auth.controller");

console.log(registerUser);

router.post("/register", registerUser);

module.exports = router;