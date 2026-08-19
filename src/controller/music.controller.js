const musicModel = require("../model/music.model");
const jwt = require("jsonwebtoken");
const {uploadfile} = require("../services/image.service");

async function createMusic(req,res){
    const token = request.cookies.token;
    if(!token){
        return res.status(403).json({ message : "Unauthorized"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decode.role !== "artist"){
            return res.status.json({
                message : "Access denied!"
            })
        }
    
    
     const {title} = req.body;
     const uri = req.file.path;

     const result = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id
     })

     res.status(201).json({ message : "music created successfully!",
        music: {
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist

         }
      })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({ 
            message : "unauthorised" 
        })
    }
    
}

module.exports = {createMusic}