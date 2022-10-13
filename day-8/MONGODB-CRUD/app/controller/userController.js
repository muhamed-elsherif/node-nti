const connect = require("../../db/connect")


class User {
    static home = (req,res)=> {
        res.render("home")
    }

    static edit = (req,res)=> {
        res.render("edit")
    }

    static single = (req,res)=> {
        res.render("single")
    }

    static del = (req,res)=> {
        res.render("del")
    }

    static add = (req,res)=> {
        res.render("add")
    }
    static addLogic = (req,res)=> {
        console.log(1)
         connect((err,db)=>{
             console.log(2)
             if(err) return res.render("error404",{pageTitle: "Page not found"})
console.log(3)
                 db.collection("users").insertOne(req.body)
                 .then(result => res.redirect("/"))
           
               .catch( e =>{
                 console.log(e.message)
                 res.render("error404",{pageTitle: "Page not found"})
             })

         })
    }
}

module.exports = User