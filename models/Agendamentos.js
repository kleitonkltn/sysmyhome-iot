const db = require('./db');

const Agendamentos = db.sequelize.define('agendamentos', {
    data: {
        type: db.Sequelize.DATE
    },
    horas: {
        type: db.Sequelize.TIME
    },
    ventilador: {
        type: db.Sequelize.STRING(1)
    },
    luzSala: {
        type: db.Sequelize.STRING(1)
    },
    luzQuarto: {
        type: db.Sequelize.STRING(1)
    },
    tv: {
        type: db.Sequelize.STRING(1)
    }

});

module.exports = Agendamentos;