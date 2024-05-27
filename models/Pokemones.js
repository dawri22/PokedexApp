const Sequilize = require('sequelize');
const Op = Sequilize.Op;

const sequelize = require("../util/database");

const Pokemones = sequelize.define("pokemone",{
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
    foto:{
        type: Sequilize.STRING,
        allowNull: false
    },
    region:{
        type: Sequilize.STRING,
        allowNull: false
    },
    primario:{
        type: Sequilize.STRING,
        allowNull: false
    }

})

module.exports = Pokemones;