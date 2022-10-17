const express = require ("express")
const hbs = require("hbs")
const path = require("path")
require("dotenv").config()

const deal = require("./controller/deal.js")

const app = express()

const PORT = process.env.PORT

const staticFiles = path.join(__dirname,`frontend/public`)
const viewFiles = path.join(__dirname, `frontend/views`)
const layoutFiles = path.join(__dirname,`frontend/layout`)
console.log(layoutFiles)
app.use(express.static(staticFiles))
app.set("view engine","hbs")
app.set("views",viewFiles)

hbs.registerPartials(layoutFiles)

app.get("/add", (req,res)=>{
    res.render("add", {
        pageTitle : "Add User",
        title : "Add"
    })
})
const dbFile = "db/users.json"
// app.get("/addMethod" , (req,res)=> {
//     const user = {id:Date.now() , ...req.query }
//     const allUsers = deal.readFromJson(dbFile)
//     allUsers.push(user)
//     deal.writeToJson(allUsers , dbFile)
//     res.redirect("/home")
// })
app.use(express.urlencoded({extended:true}))
app.post("/addMethod" , (req,res)=> {
    try{
        const user = {id:Date.now() , ...req.body }
        const allUsers = deal.readFromJson(dbFile)
        allUsers.push(user)
        deal.writeToJson(allUsers , dbFile)
        res.redirect("/home")
    
    }
    catch(e){
        res.send(e.message)
    }
})
app.get("/edit", (req,res)=>{
    res.render("edi", {
        pageTitle : "Edit User",
        title : "Edit"
    })
})

app.get("/single", (req,res)=>{
    res.render("single", {
        pageTitle : "Show User",
        title : "Show User"
    })
})

app.get("/home", (req,res)=>{
    res.render("home", {
        title : "Home",
        add : "ADD"
    })
})


app.listen(PORT,()=>{
    console.log(`Server is working on port ${PORT}`)
})