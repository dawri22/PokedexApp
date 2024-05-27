const Sequilize = require('sequelize');

const sequelize = require("../util/database");

const Primario = sequelize.define("tipo_pokemones",{
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

module.exports = Primario;