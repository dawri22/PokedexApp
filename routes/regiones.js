const express = require('express');

const router = express.Router();

const regionesController = require('../controllers/RegionesController');
 
router.get("/regiones",regionesController.GetRegioneslist);
router.get("/save-regiones",regionesController.GetCreateRegiones);
router.post("/create-regiones",regionesController.PostCreateRegiones);
router.get("/edit-regiones/:regionId",regionesController.GetEditRegiones);
router.post("/edit-regiones",regionesController.PostEditRegiones);
router.post("/delete-region",regionesController.PostDeletetRegiones);

module.exports = router;