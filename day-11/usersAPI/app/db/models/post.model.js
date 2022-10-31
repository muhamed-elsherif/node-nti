const mongoose = require("mongoose")
const Post = mongoose.model("Post",{
    title :{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    postType:{
        type:String,
        trim:true,
        enum:["txt","file"]
    },
    content:{
        type:String,
        trim:true,
        required:function(){ return this.postType=="txt"}
    },
    file:{
        type:String,
        trim:true,
        required:function(){ return this.postType!="txt"}

        
    },
    userID:{
        
    }

})

module.exports = Post