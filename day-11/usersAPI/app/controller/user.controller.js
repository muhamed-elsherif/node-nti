const userModel = require("../db/models/user.model")
const bc = require("bcryptjs")


class User {
    static register = async(req,res) => {
       try{
        const userData = new userModel(req.body)
        await userData.save()
        res.status(200).send({apiStatus:true,data: userData, message :"user added"})

       }
       catch(e){
           res.status(500).send({apiStatus:false , data:e , message:e.message})

       }
    }

    static index = async(req,res) => {
        try{
         const userData = await userModel.find()
         res.status(200).send({apiStatus:true, data: userData, message :"all added"})
 
        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
 
        }
     }


     static single = async(req,res) => {
        try{
         const userData = await userModel.findById(req.params.id)
         res.status(200).send({apiStatus:true, data: userData, message :"single users"})
        //  console.log(userData)
 
        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
 
        }
     }

     static delUser = async(req, res)=>{
        try{
            const userData = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({apiStatus:true, data: userData, message :"user deleted"})


        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
        }
    }


    static delAll = async(req, res)=>{
        try{
            const userData = await userModel.deleteMany()
            res.status(200).send({apiStatus:true, data: userData, message :"all users deleted"})


        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
        }
    }

    static login = async(req, res)=>{
        try{
            const userData = await userModel.login(req.body.email,req.body.password)
            const tokens = await userData.generateToken()
            res.status(200).send({apiStatus:true, data: userData,tokens, message :"all users deleted"})


        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
        }
    }

    static profile = async(req,res)=>{
        res.status(200).send({apiStatus:true,data:userData})
    }

    static logout = async (req,res)=>{
        try{
            req.user.token = req.user.tokens.filter(d=> d.token != req.token)
            await req.user.save()
            res.status(200).send({apiStatus:true, data: userData, message :"token deleted"})


        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
        }
    }

    static changeStatus = async (req,res)=>{
        try{
            if(req.header("status")=="activate"){
                if(req.header.status) throw new Error("already acivated")
                req.user.status=false
                await req.user.save()
            }
            else if(!req.header.status){
                throw new Error("already activated")
                req.user.status=false
                await req.user.save()
            }
            
            else throw new Error("invalid status")
            res.status(200).send({apiStatus:false , data:req.user, message:"status changed"})

        }
        catch(e){
            res.status(500).send({apiStatus:false , data:req.user, message:"status changed"})
        }
    }

    static edit = async (req,res)=>{
        try{
            const allowedEdits = ["name","email","age"]
            const keys = Object.
        }
        catch(e){
            res.satus(500).send({apiStatus:false, data:e, message:e.message})
        }
    }
    
}

module.exports = User