var express = require('express');
var router = express.Router();
const Agendamento = require("./../models/Agendamentos");
var dataFormatada = require("./../utils");
Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function (req, res, next) {
    res.render("descript")
});

router.get('/agendamentos', function (req, res) {

    Agendamento.findAll({
        order:
            ['data'],
        where: {data: { [Op.gte]: dataFormatada }}
    }).then(agendamentos => {
        res.render('agendamentos', { dados: agendamentos });
    })
});

router.get('/formAgendamento', function (req, res, next) {
    res.render("novoAgendamento")
});

router.post('/edit', (req, res) => {
    Agendamento.findOne({
        where: { id: req.body.id }
    }).then(project => {
        res.render('editAgendamento', { dados: project })
    })
});


module.exports = router;
