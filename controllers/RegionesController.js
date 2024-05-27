const Regiones = require("../models/Regiones")


exports.GetRegioneslist = (req, res, next) => {

  Regiones.findAll().
    then((result) =>{
      

      const regiones = result.map((result) => result.dataValues);
      

    res.render("region/regiones-list", { 
    pageTitle: "Regiones",
    regionActive: true,
    regiones: regiones,
    });
    })
    .catch((err) => {
      console.log(err);
    });

  };
  


exports.GetCreateRegiones = (req, res, next) => {
  res.render("region/save-regiones", 
  { pageTitle: "Create Regiones",
  regionActive: true,
  editMode: false,

});
};

exports.PostCreateRegiones = (req, res, next) => {
  const regionName = req.body.Name;


  Regiones.create({name: regionName}).then(result=>{
     res.redirect("/regiones");
  }).catch(err=>{
    console.log(err);
  });


  return  res.redirect("/regiones");
};

exports.GetEditRegiones = (req, res, next) => {

    const edit = req.query.edit;
    const regionId = req.params.regionId;

    if(!edit){
        return res.redirect("/regiones");
    }

    Regiones.findOne({where:{id: regionId}}).then(result =>{

        const region = result.dataValues;

        if(!region){
            return  res.redirect("/regiones");
        }

        res.render("region/save-regiones",{
            pageTitle: "Edit Regiones",
            regionActive: true,
            editMode: edit,
            region: region          });

    }).catch(err=>{
    console.log(err);
  });

 
};

exports.PostEditRegiones = (req, res, next) => {
    const name = req.body.Name;
    const regionId = req.body.regionId;
  
    Regiones.update({name: name }, 
        {where: {id: regionId}}
        ).then(result =>{
            return  res.redirect("/regiones");
        }).catch(err=>{
    console.log(err);
  });
  

  };

  exports.PostDeletetRegiones = (req, res, next) => {
    const regionId = req.body.regionId;
  
    Regiones.destroy({where: {id: regionId}})
    .then((result) => {
        return res.redirect("/regiones");
    })
    .catch((err) =>{
        console.log(err);
    });
  
  };

  