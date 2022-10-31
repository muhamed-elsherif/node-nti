const mongoose=require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
        maxlength:20
    },
    usrname:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
        maxlength:20,
        unique:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        validate:function(value){if(!validdator.isEmail(value)) throw new Error("Invalid email fromat")}
    },
    password:{
        type:String,
        trim:true,
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    image:{
        type:String,
        trim:true,
    },
    userType:{
        type:String,
        trim:true,
        required:true,
        enum:["admin","user"]
    }

},{timestamp:true})


const User = mongoose.model("User",UserSchema)
module.exports = User