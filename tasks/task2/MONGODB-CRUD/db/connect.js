const MongoClient = require("mongodb").MongoClient
const myConnection =(cb)=> { MongoClient.connect(process.env.DBURL , (error , client)=> {
    if(error) return cb(error,null)
    const db = client.db(process.env.DBNAME)
    cb(null,db)
    
})
}


module.exports = myConnection