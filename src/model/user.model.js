const mongoose = require("mongoose");
const { kStringMaxLength } = require("node:buffer");

const userSchema = new mongoose.Schema({
    users:{
        type : String,
        required : true,
        unique : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required : true
    },
    role: {
        type: String,
        enum: ["user", "artist"],
        default: "user"
    }

})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel 