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

        res.redirect("/agendamentos");
    }).catch(function (erro) {
        res.send("Erro:" + erro);
    })

});
router.get('/todosAgendamentos', function (req, res) {
    Agendamento.findAll().then(agendamentos => {
        return res.json(agendamentos);
    })
});


router.post('/destroy', (req, res) => {

    Agendamento.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.redirect("/agendamentos");
    });


});
router.post('/edit', (req, res) => {
    res.render('editAgendamento')
    // Agendamento.findAll({where: {id: req.body.id}}).then(agendamentos => {
    //     res.render('editAgendamento', {agendamento: agendamentos});
    // })
});


module.exports = router;



