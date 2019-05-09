Sequelize = require('sequelize');


const sequelize = new Sequelize('u513238915_shome', 'u513238915_cotsi', 'MyHome1.0', {
    host: 'sql223.main-hosting.eu.',
    dialect: 'mysql',
    port: 3306
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

