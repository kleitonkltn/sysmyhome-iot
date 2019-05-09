angular.module("websocket-archtype").controller("websocketController",

    function ($scope, $websocket) {

        var dataStream = $websocket('ws://localhost:3000/iot/websocket');
        //  
        // dataStream.onMessage(function (msg) {
        //     var dados = JSON.parse(msg.data);
        //
        //     if (dados.dataEHora) {
        //         $scope.mensagem = dados.dataEHora;
        //     }
        //     if (dados.comando) {
        //         $scope.comando = dados.comando;
        //     }
        // });

    });
