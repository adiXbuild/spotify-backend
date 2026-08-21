const express = require("express");
const multer = require("multer");
const musicController = require("../controller/music.controller");
const authmiddleware = require('../middleware/auth.middleware');

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

 // here the "next" in auth.middleware.js file will make sure the code runs after authmiddleware.authArtist...  ,

router.post("/upload", authmiddleware.authArtist,upload.single("music"),  musicController.createMusic);
router.post("/album", authmiddleware.authArtist, musicController.createAlbum);

router.get("/", authmiddleware.authUser, musicController.getAllMusics);
router.get("/albums", authmiddleware.authUser, musicController.getAllAlbums);


module.exports = router