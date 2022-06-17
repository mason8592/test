const express = require("express")
const app = express()
const path = require('path');

app.use(express.static(__dirname + "/pages/"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname+'/pages/home/index.html'))
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Up and running")
})