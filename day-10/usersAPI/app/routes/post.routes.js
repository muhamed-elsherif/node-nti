const postRouter = require("express").Router()

const Post = require("../controller/post.controller")

postRouter.post("/addPost",Post.addPost)
postRouter.get("/showAll",Post.showAll)

module.exports = postRouter 