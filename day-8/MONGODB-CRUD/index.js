const app = require("./app/server")

const PORT = process.env.PORT

app.listen(PORT,()=> {
    console.log(`Server is working at Port ${PORT}`)
})