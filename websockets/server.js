var sockjs = require('sockjs');
var server = sockjs.createServer();

var clientes = [];

server.on('connection', function (socket) {
    adicionarNaListaDeClientes(socket);
    socket.on('data', broadcast);
    socket.on('close', sair);
    setInterval(function () {
            var msg = {
                dataEHora: new Date().toTimeString()
            };
            socket.write(JSON.stringify(msg));
        }, 1000
    );
});

var adicionarNaListaDeClientes = function (socket) {
    var cliente = {
        socket: socket
    };
    clientes.push(cliente);
};

var broadcast = function (dados) {
    for (var i in clientes) {
        clientes[i].socket.write(dados);
    }
};

var sair = function () {
    console.log("Clientes saiu");
};

module.exports = server;
