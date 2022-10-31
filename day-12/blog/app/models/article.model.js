const mongoose=require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const ArticleSchema = mongoose.Schema({
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        required
    },
    title:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
        maxlength:20
    },
    body:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        trim:true,
    },
    comments:[{
        commentbody:{
            type:String,
            trim:true,
            required
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
        }
    }],
    likes:[{
        like:{
            type:mongoose.Schema.Types.ObjectId,
        }
    }]

},{timestamp:true})


const Article = mongoose.model("Article",ArticleSchema)
module.exports = Article