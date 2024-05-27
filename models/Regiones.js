const Sequilize = require('sequelize');

const sequelize = require("../util/database");

const Regiones = sequelize.define("regiones",{
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequilize.STRING,
        allowNull: false
    },

});

module.exports = Regiones;