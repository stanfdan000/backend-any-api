const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router() 
  .get('/:id', async (req, res) => {
    const Games = await Game.getById(req.params.id);
    res.json(Games);
  })

  .get('/', async (req, res) => {
    const games = await Game.getAll();
    res.json(games);
  });

