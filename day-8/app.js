const {MongoClient , ObjectId} = require("mongodb")
const URL = "mongodb://127.0.0.1:27017"
const dbName = "new"


MongoClient.connect(URL , (error , client)=> {
const db = client.db(dbName)
db.collection("todo").updateOne({_id:new ObjectId("63455fa4a591693cd0f60e82")}, {$inc:{age:5}})
    .then(res=>{
        console.log(res)
        client.close()
    })
    .catch(e=>{console.log(e.message)
               client.close()})
    })
