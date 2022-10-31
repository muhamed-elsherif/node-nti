const postModel = require("../db/models/post.model")

class Post {
    static addPost = async (req,res)=>{
        try{
            const postData = new postModel(req.body)
            await postData.save()
            res.status(200).send({apiStatus:true,data: postData, message :"post added"})

        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
        }
    }

    static showAll = async (req,res)=>{
        try{
            const postData =  await postModel.find()
            res.status(200).send({apiStatus:true,data: postData, message :"post added"})

        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})
        }
    }
}

module.exports = Post