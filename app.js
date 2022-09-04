const express = require("express")
const app = express()
const path = require('path');
const favicon = require("serve-favicon")

app.use(favicon(path.join(__dirname, 'favicon.ico')))

app.use(function(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
        "Content-Security-Policy": "default-src 'self' 'unsafe-inline'; img-src 'self' https://*; script-src 'self' 'unsafe-inline';",
        "X-Content-Security-Policy": "default-src *",
        "X-WebKit-CSP": "default-src *"
    })

    return next();
});

app.use(express.static(path.join(__dirname + "/public/pages")));
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname+'/public/home/index.html'))
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Up and running")
})