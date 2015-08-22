function sayHello(name) {
    return "Hello " + name + "!";
}

$(function () {
    //console.log(sayHello("to everyone"));
    var express = require("express");
    var app = express();
    var port = 8080;

//This code informs Express where your template files are, and which template engine to use.
    //app.set('views', __dirname + '/tpl');
    //app.set('view engine', "jade");
    //app.engine('jade', require('jade').__express);
    app.get("/", function (req, res) {
        res.send("FUNCIONA :D");
        //res.render("page");
    });

//We'll use an external JavaScript file that will hold the front-end logic, inform ExpressJS where to look for such resources.
    //app.use(express.static(__dirname + '/public'));

//app.listen(port);
//integrate Socket.io to run our project
    //var io = require('socket.io').listen(app.listen(port));

//receive msgs from client and send it to all others (every Socket.io app begins with a connection handler)
    /*io.sockets.on('connection', function (socket) {
        //send a message
        socket.emit('message', {message: 'Bienvenidos al CHAT'});
        //receive a message (from frontend)
        socket.on('send', function (data) {
            io.sockets.emit('message', data);
        });
    });*/

//console (terminal) messages
    console.log("Escuchando a través del puerto ... " + port);
});