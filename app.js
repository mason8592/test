const express = require("express")
const app = express()
const path = require('path');

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline'; img-src 'self' https://*; script-src 'self' 'unsafe-inline';");
    return next();
});

app.use(express.static(path.join(__dirname + "/public/pages")));
app.use(express.static(path.join(__dirname + "/public")));

app.get('/favicon.ico', (req, res) => res.status(204).end()); 

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname+'/public/home/index.html'))
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Up and running")
})