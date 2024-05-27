const express = require('express');

const router = express.Router();

const pokemonesController = require('../controllers/PokemonesController');

router.get("/",pokemonesController.GetPokemoneslist);
router.get("/pokemones-list", pokemonesController.GetPokemonestlist);
router.get("/save-pokemones",pokemonesController.GetCreatePokemones);
router.post("/create-pokemon",pokemonesController.PostCreatePokemon);
router.get("/edit-pokemon/:pokemonId",pokemonesController.GetEditPokemon);
router.post("/edit-pokemon",pokemonesController.PostEditPokemon);
router.post("/delete-pokemon",pokemonesController.PostDeletetPokemon);
router.post("/", pokemonesController.PostFilter);

module.exports = router;