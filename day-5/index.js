// const yargs = require("yargs") 

// yargs.command({
//     command: "add",
//     builder: {
//         x: { type:"number" , demandOption: true},
//         y: { type:"number" , demandOption: true}
//     },
//     handler: function (argv){
//         console.log(argv.x + argv.y)
//     }
// })

// yargs.command({
//     command: "mul",
//     builder: {
//         x: { type:"number" , demandOption: true},
//         y: { type:"number" , demandOption: true}
//     },
//     handler: function (argv){
//         console.log(argv.x * argv.y)
//     }
// })

// yargs.command({
//     command: "div",
//     builder: {
//         x: { type:"number" , demandOption: true},
//         y: { type:"number" , demandOption: true}
//     },
//     handler: function (argv){
//         console.log(argv.x / argv.y)
//     }
// })

// yargs.command({
//     command: "sub",
//     builder: {
//         x: { type:"number" , demandOption: true},
//         y: { type:"number" , demandOption: true}
//     },
//     handler: function (argv){
//         console.log(argv.x - argv.y)
//     }
// })

// yargs.argv

// ========================================================


// const https = require("https")
// const apiURL = "https://dummyjson.com/comments"

// const req = https.request(apiURL , (res) =>{
//     let data = ""
//     res.on("data" , (d)=> {

//         data += d.toString()

//     })
//     res.on("end" , ()=> {console.log(JSON.parse(data))})
// })

// req.on("error" , (e)=> {console.log(e)})
// req.end()

// ===============================================================

// const fetch = require("node-fetch")

const URL = "https://dummyjson.com/comments"

// fetch(URL)
//     .then(res => res.json())
//     .then(json => console.log(json));

    
// async function fet() {
//     const response = await fetch(URL);
//     const data = await response.json();
//     return data;
//   }
//   fet().then(data => {
//     console.log(data); // 
//   });

// const yargs = require("yargs") 
// yargs.command ({
//     command: "fetch",
//     builder:{ url : {type : "string" , demandOption : true} },
//     handler: async function (argv) {

//         try{
//             const response = await fetch(argv.url)
//             const data = await response.json()
//             console.log(data)
//         }
//         catch (e){
//             console.log(e.message)
    
//         }
        
//     }
     
// })
// yargs.argv





// ================================================

require("dotenv").config()
const express = require("express")
// const { require } = require("yargs")

const app = express()
const PORT = process.env.PORT


// app.get("/hello",(req,res)=> {
//     res.send("<h1>Hello<h1>")
// })
// app.get("/about",(req,res)=> {
//     res.send([{name:"mohamed"} , {name: "elsherif"}])
// })

// app.get("/html",(req,res)=> {
//     const myFile =__dirname+"//page.html" 
//     res.sendFile(myFile)
// })
app.use(express.static(`${__dirname}/public`))


app.set("view engine","hbs")
app.set("views", "my-views")
app.get("/", (req,res)=> {
    res.render("home")
})

app.listen(PORT , ()=> {
    console.log(`Server is listening on port ${PORT} ...`)
})


