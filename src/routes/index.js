const express = require('express');
const routes = express.Router();

routes.get('/', function(req, res) {
  return res.render('home/index.njk');
});



routes.get('/managing/movies/create', function(req, res) {
  return res.render('admin/registreMovie.njk');
});

module.exports = routes;