const express = require("express");
const multer = require("multer");
const musicController = require("../controller/music.controller");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/upload",  upload.single("music"),  musicController.createMusic)



module.exports = router