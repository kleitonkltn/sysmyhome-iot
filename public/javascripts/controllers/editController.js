angular.module("websocket-archtype").controller("editController",
    function ($scope, $websocket, $http) {

        check = function (ventilador, luzSala, luzQuarto, tv) {

            if (ventilador == "L")
                document.getElementById("ventiladorL").checked = true;
            else {
                document.getElementById("ventiladorD").checked = true;
            }

            if (tv == "L")
                document.getElementById("tvL").checked = true;
            else {
                document.getElementById("tvD").checked = true;
            }

            if (ventilador == "L")
                document.getElementById("luzSalaL").checked = true;
            else {
                document.getElementById("luzSalaD").checked = true;
            }

            if (luzQuarto == "L")
                document.getElementById("luzQuartoL").checked = true;
            else {
                document.getElementById("luzQuartoD").checked = true;
            }

        }

    });