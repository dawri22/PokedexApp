const Primario = require("../models/Primario")


exports.GetPrimariolist = (req, res, next) => {

  Primario.findAll().
    then((result) =>{
      

      const primario = result.map((result) => result.dataValues);
      

    res.render("primario/primario-list", { 
    pageTitle: "Tipo de pokemones",
    primarioActive: true,
    primario: primario,
    });
    })
    .catch((err) => {
      console.log(err);
    });

  };
  


exports.GetCreatePrimario = (req, res, next) => {
  res.render("primario/save-primario", 
  { pageTitle: "Create Tipo de pokemones",
  primarioActive: true,
  editMode: false
});
};

exports.PostCreatePrimario = (req, res, next) => {
  const primarioName = req.body.Name;


  Primario.create({name: primarioName}).then(result=>{
     res.redirect("/primario");
  }).catch(err=>{
    console.log(err);
  });


  return  res.redirect("/primario");
};

exports.GetEditPrimario = (req, res, next) => {

    const edit = req.query.edit;
    const primarioId = req.params.primarioId;

    if(!edit){
        return res.redirect("/primario");
    }

    Primario.findOne({where:{id: primarioId}}).then(result =>{

        const primario = result.dataValues;

        if(!primario){
            return  res.redirect("/primario");
        }

        res.render("primario/save-primario",{
            pageTitle: "Edit Tipo de pokemones",
            primarioActive: true,
            editMode: edit,
            primario: primario
                    });

    }).catch(err=>{
    console.log(err);
  });

 
};

exports.PostEditPrimario = (req, res, next) => {
    const name = req.body.Name;
    const primarioId = req.body.primarioId;
  
    Primario.update({name: name }, 
        {where: {id: primarioId}}
        ).then(result =>{
            return  res.redirect("/primario");
        }).catch(err=>{
    console.log(err);
  });
  

  };

  exports.PostDeletetPrimario = (req, res, next) => {
    const primarioId = req.body.primarioId;
  
    Primario.destroy({where: {id: primarioId}})
    .then((result) => {
        return res.redirect("/primario");
    })
    .catch((err) =>{
        console.log(err);
    });
  
  };

  