const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const auth = async (req,res,next)=>{
    try{
        const token = req.header("Authorization").replace("bearer ", "") 
        const decoded = jwt.verify(token, process.env.JWTKEY)
        const userData = await userModel.findOne({
            _id:decoded._id,
            "tokens.token":token
        })
        if(!userData) throw new Error("Unauthorzed")
        req.token = token
        req.user= userData
        next()
     }
     catch(e){
        res.status(500).send({apiStatus:false, data:e, message:e.message})
     }
}

const authAdmin = (req,res,next)=>{
    if(!req.user.userType == "admin") throw new Error("Not admin")
    next()
}

const authUser = (req,res,next)=>{
    if(!req.user.userType == "user") throw new Error("Not user")
    next()
}

module.exports = auth,authAdmin,authUser