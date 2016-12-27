var net = require('net');

/*

used for creation of clients and servers.

*/

var server = net.createServer(function(connection) {
    console.log('client has been connected.');

    connection.on('end', function() {
        console.log('client has been disconnected.');
    });

    connection.write('Hello There!');
    connection.pipe(connection);
});

server.listen(8080, function() {
    console.log('server listening on port 8080.');
});
