const express = require("express")
const path = require("path")
const cors = require("cors")
require("dotenv").config()
require("./db/connect")

const userRoutes =require("./routes/user.route")

app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"../static")))
app.use(userRoutes)



module.exports = app 

