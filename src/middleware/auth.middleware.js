const jwt = require("jsonwebtoken");

async function authArtist(req, res, next){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "unauthorized!"
        })
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        if (decoded.role != "artist"){
            return res.status(403).json({
                message : "you dont have access!"
            })
        }
        
        req.user = decoded; // this "user" thing did not exist before the middleware but middleware will pass this and the next part where this user thing will exist!
        // ########################################################
        next() // to pass the request from one middleware to further

    } catch(err){
        console.log(err);
        res.status(401).json({
            message : "error!"
        })
    }

    

}

async function authUser(req, res, next){
    const token = req.cookies.token;

    if(!token){
        return res.status(409).json({
            message : "unauthorized!"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !=="user" && decoded.role !== "artist"){
            return res.status(403).json({
                message : "you dont have the access!"
            })
        }
        
        req.user = decoded;

        next()
    }catch(err){
        console.log(err);

    }
}


module.exports = {authArtist, authUser};