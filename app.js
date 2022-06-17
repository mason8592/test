const express = require("express")
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname+"/pages")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname+'/pages/home/index.html'))
})

app.listen(process.env.PORT , function () {
  console.log("Up and running")
})