const express = require('express');
const movieController = require('../app/controllers/movieController');

const routes = express.Router();

routes.get('/', movieController.getAll);
routes.post('/movies', movieController.create);

routes.get('/managing/movies/create', function(req, res) {
  return res.render('admin/registreMovie.njk');
});

module.exports = routes;
