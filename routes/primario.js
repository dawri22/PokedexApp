const express = require('express');

const router = express.Router();

const primarioController = require('../controllers/PrimarioController');
 
router.get("/primario",primarioController.GetPrimariolist);
router.get("/save-primario",primarioController.GetCreatePrimario);
router.post("/create-primario",primarioController.PostCreatePrimario);
router.get("/edit-primario/:primarioId",primarioController.GetEditPrimario);
router.post("/edit-primario",primarioController.PostEditPrimario);
router.post("/delete-primario",primarioController.PostDeletetPrimario);

module.exports = router;