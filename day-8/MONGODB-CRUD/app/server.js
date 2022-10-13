const express = require("express")
const hbs = require("hbs")
const path = require("path")

require("dotenv").config()
const userRoutes = require("./routes/userRoutes")


const app = express()

app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.set("views", path.join(__dirname,"../frontend/views"))
app.use(express.static(path.join(__dirname,"../frontend/public")))
app.use(userRoutes)
hbs.registerPartials(path.join(__dirname,"../frontend/layout"))

app.all("*", (req,res)=>{res.render("error404",{pageTitle: "Page not found"})})




module.exports = app
