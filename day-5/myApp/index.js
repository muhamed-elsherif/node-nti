const express = require ("express")
const views = require("hbs")
const path = require("path")
require("dotenv").config()

const app = express()

const PORT = process.env.PORT

const staticFiles = path.join(__dirname,`frontend/public`)
const viewFiles = path.join(__dirname, `frontend/views`)

app.use(express.static(staticFiles))
app.set("view engine","hbs")
app.set("views",viewFiles)

app.get("/about", (req,res)=>{
    res.render("about.hbs")
})

app.get("/home", (req,res)=>{
    res.render("home.hbs")
})


app.listen(PORT,()=>{
    console.log(`Server is working on port ${PORT}`)
})