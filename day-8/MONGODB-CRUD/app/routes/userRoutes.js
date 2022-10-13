const route = require("express").Router()
const User = require("../controller/userController")

route.get("/", User.home)
route.get("/add", User.add)
route.post("/addLogic", User.addLogic)
route.get("/edit", User.edit)
route.get("/single", User.single)




module.exports = route