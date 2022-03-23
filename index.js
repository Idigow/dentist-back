const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('./routes/index.route'))

const URL = process.env.URL
const PORT = process.env.PORT

async function start () {
  try{
    await mongoose.connect(URL)
    app.listen(PORT, ()=> {
      console.log("Server has been PORT " + process.env.PORT)
    })
  } catch (e) {
    console.log(e)
  }
}
start()
