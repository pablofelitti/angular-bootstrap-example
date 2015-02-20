var http = require("http");
var express = require("express");
var socketIo = require("socket.io");

var app = express();
var server = http.createServer(app);
var io = socketIo.listen(server);

var PORT = 8080;


io.on("connection", function (client) {
    console.log("Client connected!");
    client.emit("server-message", "Welcome user!!");

    client.on("client-message", function (message) {
        console.log("Client message entered: " + message);
    });
});

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

server.listen(PORT);

console.log("Server started in port " + PORT);