angular.module("websocket-archtype").controller("websocketController",
    function ($scope, $websocket, $http) {
        var host = window.location.host;
        var urlbase = "http://"+host;
        var dataStream = $websocket('ws://' + host + '/iot/websocket');
        dataStream.onMessage(function (msg) {
            var dados = JSON.parse(msg.data);

            $scope.mensagem = dados.dataeHora;

            if (dados.comando) {
                $scope.comando = dados.comando;
            }

        });


        $scope.enviarAgendamentos = function () {

            $http.get(urlbase + "/actions/todosAgendamentos")
                .then(function (response) {
                    if (response != null) {
                        var r = confirm("Deseja Confirmar a ação: Enviar Agendamentos?");
                        if (r == true) {
                            $scope.agendamentos = response.data;
                            enviar();
                        }

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