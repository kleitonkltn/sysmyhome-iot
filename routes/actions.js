const express = require('express');
const Agendamento = require("../models/Agendamentos");
const router = express.Router();
const Sequelize = require("sequelize");
var dataFormatada = require("./../utils");
const Op = Sequelize.Op;
var moment = require('moment');

router.get('/', (req, res) => {
    res.send("Painel Administrativo")
});

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
    data = new Date();
    Agendamento.findAll({
        order: ['luzSala'],
        where: {
            where: {
                data: {
                    [Op.gte]: dataFormatada
                }
            }
        }
    }).then(agendamentos => {
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

router.put('/update', (req, res) => {
    Agendamento.update({
        data: req.body.data,
        horas: req.body.horas,
        ventilador: req.body.ventilador,
        luzSala: req.body.luzSala,
        luzQuarto: req.body.luzQuarto,
        tv: req.body.tv
    }, {
        where: {
            id: req.body.id
        }

    }).then(() => {
        res.redirect("/agendamentos");
    });

});



module.exports = router;