const userRouter = require("express").Router()
const User = require("../controller/user.controller")
const auth = require("../middleware/auth.middleware")

userRouter.post("/register",User.register)
userRouter.get("/single/:id",User.single)
userRouter.get("/index",auth,User.index)
userRouter.delete("/delall",User.delAll)
userRouter.delete("/del/:id",User.delUser)
userRouter.get("/login",User.login)
userRouter.post("/logout",User.logout)







module.exports = userRouter 