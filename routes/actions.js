const express = require('express');
const Agendamento = require("../models/Agendamentos");
const router = express.Router();


router.post('/addAgendamento', (req, res) => {

    Agendamento.create({
        data: req.body.data,
        horas: req.body.horas,
        ventilador: req.body.ventilador,
        luzSala: req.body.luzSala,
        luzQuarto: req.body.luzQuarto,
        tv: req.body.tv
    }).then(function () {
        res.send("Agendamento Criado com Sucesso!" + JSON.stringify(req.body));
    }).catch(function (erro) {
        res.send("Erro:" + erro);
    })

});
router.post('/destroy', (req, res) => {

    Agendamento.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.render('agendamentos', {msg: "Agendamento Excluido com Suscesso"})
    });


});
router.post('/edit', (req, res) => {

    Agendamento.findAll({where: {id: req.body.id}}).then(agendamentos => {
        res.send('Pagina de Exclusão' + JSON.stringify(agendamentos));
    })
});


module.exports = router;


