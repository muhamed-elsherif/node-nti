const mongoose = require("mongoose")

mongoose.connect(process.env.DBURL)

module.exports