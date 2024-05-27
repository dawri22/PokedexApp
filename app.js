const path = require("path");
const express = require("express");
const expressHbs = require("express-handlebars");
const sequelize = require("./util/database");
const Pokemones =require("./models/Pokemones");
const Regiones = require("./models/Regiones");
const Primario = require("./models/Primario");

const errorController = require("./controllers/ErrorController");

const app = express();

app.engine(
    "hbs",
    expressHbs({
      layoutsDir: "views/layouts/",
      defaultLayout: "main-layout",
      extname: "hbs"
    })
  );
  

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

const pokemonesRouter = require("./routes/pokemones");
const regionesRouter = require("./routes/regiones");
const primarioRouter = require("./routes/primario");

app.use(pokemonesRouter);
app.use(regionesRouter);
app.use(primarioRouter);


app.use(errorController.Get404);

Pokemones.belongsTo(Regiones,{constraint: true,onDelete: "CASCADE"})
Regiones.hasMany(Pokemones);

sequelize.sync().then(function(result){
    app.listen(3000);
}).catch(error =>{
    console.log(error);
})

