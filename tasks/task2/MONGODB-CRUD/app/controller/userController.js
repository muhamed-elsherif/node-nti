const connect = require('../../db/connect')
const ObjectId= require("mongodb").ObjectId
class User{
    static add = (req, res)=>{
        res.render("add", {pageTitle:"add New User"})
    }
    static addLogic = (req, res)=>{
        connect(async(err, db)=>{
         if(err)return res.render("error404", {pageTitle:"database error 1"})
          try{
            req.body.status? req.body.status=true: req.body.status=false
            await db.collection("user").insertOne(req.body)
            res.redirect("/")
            return ;
          }
          catch(e){
            res.render("error404", {pageTitle:"database error 2"})
          }
                
        })
    }
    static index = (req, res)=>{
        connect(async(err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error 1"})
             try{
                const data = await db.collection("user").find().toArray()
                res.render("home", {
                    pageTitle:"All Users",
                    data,
                    isEmpty : !data.length
                })
             }
             catch(e){
                res.send(e.message)
             }
            })
    }

    static single = (req, res)=>{
        res.render("single")
    }
    static edit = (req, res)=>{
        res.render("edit")
    }
    static addAddr = (req, res)=>{
        res.render("addAddr")
    }
    static delUser = (req, res)=>{
        connect(async(err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error 1"})
             try{
                const data = await db.collection("user").deleteOne({_id: new ObjectId(req.params.id)})
                res.redirect("/")
             }
             catch(e){
                res.send(e.message)
             }
            })
    }
    static delAddr = (req, res)=>{
        res.send("delAddr")
    }
}
module.exports = User