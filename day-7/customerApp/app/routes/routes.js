const route = require("express").Router()

const customerControl = require("../controller/customerControl")

//------------------------------------------------------------------//

route.get("/add",customerControl.addCustomer)
route.get("/addMethod",customerControl.addMethod)
route.get("/home",customerControl.showAll)
route.get("/account/:id",customerControl.single)
route.get("/addMoney/:id",customerControl.addMoney)



module.exports = route