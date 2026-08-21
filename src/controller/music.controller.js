const musicModel = require("../model/music.model");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../services/image.service");

async function createMusic(req, res) {

    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "Access denied! Only artists can upload music."
            });
        }

        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required"
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: "Music file is required"
            });
        }

        const result = await uploadFile(req.file);
        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id        //before middleware this "decoded.id" we were using!
        });

        return res.status(201).json({
            message: "Music created successfully!",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist
            }
        });

    } catch (err) {
        console.log(err);
    }
}


async function createAlbum(req, res) {

    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Only artists can create albums
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "Access denied! Only artists can create albums."
            });
        }

        const { title, musicIds } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Album title is required"
            });
        }

        const album = await albumModel.create({
            title,
            artist: req.user.id,      // here also replaced "decoded.id" with req.user.id!
            music: musicIds
        });

        return res.status(201).json({
            message: "Album created successfully!",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                music: album.music
            }
        });

    } catch (err) {
        console.log(err);
    }
}


async function getAllMusics(req, res){
    const music = await musicModel.find();

    res.status.json({
        message : " all music fetched successfully!",
        musics: musics,
    })
}

module.exports = {createMusic, createAlbum, getAllMusics};