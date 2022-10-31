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
            res.status(200).send({apiStatus:true, data: userData, message :"all users deleted"})


        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
        }
    }
}

module.exports = User