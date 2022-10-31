const express = require("express")
const path = require("path")
require("dotenv").config()
require("./db/connection")


const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"../public")))
const userRoutes = require("./routes/user.routes")
const postRoutes = require("./routes/post.routes")
app.use("/users",userRoutes)
app.use("/posts",postRoutes)


module.exports = app