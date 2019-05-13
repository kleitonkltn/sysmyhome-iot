angular.module("websocket-archtype").controller("websocketController",
    function ($scope, $websocket, $http) {
        var urlbase = window.location.origin;
        var host = window.location.host;
        var dataStream = $websocket('ws://' + host + '/iot/websocket');
        dataStream.onMessage(function (msg) {
            var dados = JSON.parse(msg.data);

            $scope.mensagem = dados.dataeHora;

            if (dados.comando) {
                $scope.comando = dados.comando;
            }

        });


        $scope.ligar = function () {

            $http.get(urlbase + "/actions/todosAgendamentos")
                .then(function (response) {
                    if (response != null) {
                        alert(JSON.stringify(response.data));
                        $scope.agendamentos = response.data;
                        enviar();
                    } else {
                        alert("Agendamentos vazio");

                    }
                })


        }

        function enviar() {
            var msg = {
                comando: JSON.stringify($scope.agendamentos),
            };

            dataStream.send(msg)
        }

    })
;