const mongoose = require("mongoose");

const post =  mongoose.model("post", {
    title :{
        required:true,
        type: String,
        unique:true,
        minlength:3
    },
    content : {
        required:true,
        type: string,
        minlength : 3
    },

    dueDate : {
        type : date
    },

    
})