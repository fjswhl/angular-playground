/**
 * Created by lin on 14/11/15.
 */

var net = require('net');

var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        socket.write(data);
    });
});

server.listen(3001);

