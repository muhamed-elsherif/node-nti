const app = require("./app/src")

PORT = process.env.PORT

app.all("*", (req,res)=>{
    res.status(500)
    .send({apiStatus:false, message:"Invalid url"})
})
    
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`)
})