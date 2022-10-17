// Import the required files,libraries and framworks

const express = require("express")
const hbs = require("hbs")
const path = require("path")
require("dotenv").config()

const routes = require("./app/routes/routes")

// The Paths 

const staticFiles = path.join(__dirname, "frontend/public")
const viewsFiles = path.join(__dirname, "frontend/views")
const layoutsFiles = path.join(__dirname, "frontend/layout")

// The port 

const PORT = process.env.PORT

// ==================================================================== //


const app = express()

app.use(express.urlencoded({extended:true}))
app.set("view engine" , "hbs")
app.set("views",viewsFiles)
app.use(express.static(staticFiles))
hbs.registerPartials(layoutsFiles)

app.use(routes)

// Start the server

app.listen(PORT,()=> {
    console.log(`The server is working in port ${PORT}`)
})