const MongoClient = require("mongodb").MongoClient
console.log(process.env.DBNAME)
const myConnection =(cb)=> { MongoClient.connect(process.env.DBURL , (error , client)=> {
    if(error) return cb(error,null)
    const db = client.db(process.env.DBNAME)
    cb(null,db)
    
})
}


module.exports = myConnection