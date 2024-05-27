const Sequilize = require('sequelize');

const sequelize = new Sequilize("pokemons","root","",{
    host:"localhost", 
    port: 3306,
    dialect: "mysql", 
});

module.exports = sequelize;