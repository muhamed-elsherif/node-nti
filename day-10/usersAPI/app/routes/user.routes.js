const userRouter = require("express").Router()

const User = require("../controller/user.controller")

userRouter.post("/register",User.register)
userRouter.get("/single/:id",User.single)
userRouter.get("/index",User.index)
userRouter.delete("/delall",User.delAll)
userRouter.delete("/del/:id",User.delUser)
userRouter.get("/login",User.login)






module.exports = userRouter 