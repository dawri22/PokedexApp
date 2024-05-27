const { Model } = require("sequelize");
const Op = Model.Op;
const Pokemones = require("../models/Pokemones");
const Primario = require("../models/Primario");
const Regiones = require("../models/Regiones");

exports.GetPokemoneslist = (req, res, next) => {
  Pokemones.findAll().
    then((result) =>{
      
      const regiones=[];
      Regiones.findAll().then(result1 =>{
      
         result1.map((result1) => regiones.push(result1.dataValues) );
    
      }) 
      .catch((err) => {
          console.log(err);
        });

    const pokemones = result.map((result) => result.dataValues);
      

    res.render("pokemones/index", { 
    pageTitle: "Pokemones",
    homeActive: true,
    pokemones: pokemones,
    regiones:regiones,
    hasPokemones: pokemones.length > 0
    });
    })
    .catch((err) => {
      console.log(err);
    });


};

exports.GetPokemonestlist = (req, res, next) => {

    Pokemones.findAll().
    then((result) =>{
      

      const pokemones = result.map((result) => result.dataValues);
      

    res.render("pokemones/pokemones-list", { 
    pageTitle: "Pokemones",
    homeActive: true,
    pokemones: pokemones,
    hasPokemones: pokemones.length > 0
    });
    })
    .catch((err) => {
      console.log(err);
    });

  };
  


   exports.GetCreatePokemones = (req, res, next) => {

    
    Primario.findAll().
    then((result) =>{
      
      const regiones=[];
      Regiones.findAll().then(result1 =>{
      
         result1.map((result1) => regiones.push(result1.dataValues) );
    
      }) 
      .catch((err) => {
          console.log(err);
        });

    const primario = result.map((result) => result.dataValues);
      

    res.render("pokemones/save-pokemones", { 
    pageTitle: "Pokemones",
    homeActive: true,
    primario: primario,
    regiones: regiones,
    hasPokemones: regiones.length > 0,
    });
    })
    .catch((err) => {
      console.log(err);
    });

};


exports.PostCreatePokemon = (req, res, next) => {
  const name = req.body.Name;
  const fot = req.body.Foto;
  const region = req.body.Region;
  const primario = req.body.Primario;

  Pokemones.create({name: name,foto: fot, region: region,primario: primario}).then(result=>{
     res.redirect("/pokemones-list");
  }).catch(err=>{
    console.log(err);
  });


  return  res.redirect("/pokemones-list");
};

exports.GetEditPokemon = (req, res, next) => {

    const edit = req.query.edit;
    const pokemonesId = req.params.pokemonId;

    if(!edit){
        return res.redirect("/pokemones-list");
    }

    Pokemones.findOne({where:{id: pokemonesId}}).then(result =>{

        const pokemon = result.dataValues;

        if(!pokemon){
            return  res.redirect("/pokemones-list");
        }

        Primario.findAll().then(result =>{
          const primario =result.map((result) => result.dataValues);
      
          res.render("pokemones/save-pokemones",{
            pageTitle: "Edit pokemones",
            homeActive: true,
            editMode: edit,
            primario: primario
          });
        }) 
        .catch((err) => {
            console.log(err);
          });
      

    }).catch(err=>{
    console.log(err);
  });

 
};

exports.PostEditPokemon = (req, res, next) => {
    const name = req.body.Name;
    const fot = req.body.Foto;
    const region = req.body.Region;
    const primario = req.body.Primario;

    const pokemonId = req.body.pokemonId;
  
    Pokemones.update({name: name, foto: fot, region: region, primario: primario }, 
        {where: {id: pokemonId}}
        ).then(result =>{
            return  res.redirect("/pokemones-list");
        }).catch(err=>{
    console.log(err);
  });
  

  };

  exports.PostDeletetPokemon = (req, res, next) => {
    const pokemonId = req.body.pokemonId;
  
    Pokemones.destroy({where: {id: pokemonId}})
    .then((result) => {
        return res.redirect("/pokemones-list");
    })
    .catch((err) =>{
        console.log(err);
    });
  
  };

  exports.PostFilter = (req, res, next) => {
    const filtroId = req.body.Filtral;
  
    Pokemones.findAll({include:[{model: Regiones},{model: Primario}], where: {id:{ filtroId }}})
    .then((result) => {

      const filtros = result.map((result) => result.dataValues);
      res.render("pokemones/index", { 
        pageTitle: "Pokemones",
        homeActive: true,
        pokemones: filtros,
        });
    })
    .catch((err) =>{
        console.log(err);
    });
  
  };



  