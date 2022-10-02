const express = require("express")
const bodyParser = require("body-parser");
const router = express.Router();
const app = express()
const path = require('path');
const favicon = require("serve-favicon")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router.post("/handle", async (request, response) => {

// })

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline'; img-src 'self' https://*;");

    return next()
})

app.use(express.static(path.join(__dirname + "/public/pages")));
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/public/home/index.html'))
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Up and running")
})

app.use("/", router)