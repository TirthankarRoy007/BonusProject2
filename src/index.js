require('dotenv').config()
const express = require('express')
const route = require('./route/route')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://Tirtha008:mlpnk3AhOzHztAdO@tirthacluster.psqixlb.mongodb.net/coin", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))

app.use("/", route)

app.listen(3000, function () {
    console.log("Express app running on port 3000")
})