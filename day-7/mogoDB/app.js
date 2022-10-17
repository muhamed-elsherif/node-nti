
const {MongoClient , ObjectId} = require("mongodb")
const URL = "mongodb://127.0.0.1:27017"
const dbName = "new"

const data = {"id":30,"todo":"Take cat on a walk","completed":false,"userId":15}
MongoClient.connect(URL , (error , client)=> {
    if(error) return console.log(error.message)
    const db = client.db(dbName)
    db.collection("ts").insertOne(data)
    .then(res=>{
        console.log(res)
        client.close()
    })
    .catch(e=>{console.log(e.message)})
})