angular.module("websocket-archtype").controller("websocketController",
    function ($scope, $websocket) {

        var dataStream = $websocket('ws://localhost:3000/iot/websocket');
        dataStream.onMessage(function (msg) {
            var dados = JSON.parse(msg.data);

            $scope.mensagem = dados.dataeHora;

            if (dados.comando){
                $scope.comando = dados.comando;
            }

        });

        $scope.ligar = function () {
            var msg = {
                comando: "ligar"
            };
            dataStream.send(msg)
        };
        $scope.desligar = function () {
            var msg = {
                comando: "desligar"
            };
            dataStream.send(msg)
        };
    })
;