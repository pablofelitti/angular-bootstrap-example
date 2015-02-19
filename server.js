var http = require("http");
var express = require("express");

var PORT = 8080;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT);

console.log("Server started in port " + PORT);