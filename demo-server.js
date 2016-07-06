var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log("Recieved a message: ", msg);
        io.emit('chat message', {
            message: msg
        });
    });
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});
