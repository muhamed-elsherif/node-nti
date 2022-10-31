const mongoose = require("mongoose")
const validator = require("validator")

const bc = require("bcryptjs")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:3,
        maxlength:30
    },
    age:{
        type:Number,
        min:21,
        max:100,
        default:21
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        validate:function(value){
            if(!validator.isEmail(value)) throw new Error ("Not a alid email address")
        }
    },
    image:{
        type:String,
        trim:true,
    },
    password:{
        type:String,

        // match: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$",
    },
    status:{
        type:Boolean
    },

},{ timestamps:true})

UserSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.password
    return data
}

UserSchema.statics.login = async function (email,password){
    const userData = await User.findOne({email})
    if(!userData) throw new Error("Invalid Email")
    const isValid = await bc.compare(password,userData.password)
    if(!isValid) throw new Error("Invalid password")
    return userData

}

UserSchema.pre("save", async function(){
    if(this.isModified("password")){
        this.password = await bc.hash(this.password,10)
    }
})

const User = mongoose.model("User",UserSchema)

module.exports = User