/**
 * Basic server
 */

var express = require("express");
var app = express();
var port = 9090;

//tell Express where are template files, and which template should use
app.set("views", __dirname + "/src/main/resources/static/chat");

app.get("/", function (req, res) {
    res.send("Server started successfully");
});

//external JS file that manages itself frontend logic
app.use(express.static(__dirname + "/src/main/resources/static/chat"));

//integrate Socket.io to run our project
var io = require('socket.io').listen(app.listen(port));

//receive msgs from client and send it to all others
//(every Socket.io app begins with a connection handler)
io.sockets.on('connection', function (socket) {
    //send a message
    socket.emit('message', {message: 'Bienvenidos al CHAT'});
    //receive a message (from frontend)
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

console.log("Escuchando a través del puerto ... " + port);