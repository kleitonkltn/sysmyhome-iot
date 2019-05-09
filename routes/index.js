var express = require('express');
var router = express.Router();
const Agendamento = require("./../models/Agendamentos");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render("descript")
});
router.get('/agendamentos', function (req, res) {
    Agendamento.findAll().then(agendamentos => {
        res.render('agendamentos', {dados: agendamentos});
    })
});

router.get('/formAgendamento', function (req, res, next) {
    res.render("novoAgendamento")
});
router.post('/novo', (req, res) => {
    res.send(req.body.tv);
});


module.exports = router;
