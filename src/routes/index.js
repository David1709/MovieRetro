const express = require('express');
const movieController = require('../app/controllers/movieController');
const loginController = require('../app/controllers/loginController');
const registerController = require('../app/controllers/registerController');

const routes = express.Router();

routes.get('/', movieController.getAll);
routes.post('/movies', movieController.create);
routes.post('/login', loginController.login);
routes.post('/register', registerController.register);

routes.get('/managing/movies/create', function(req, res) {
  return res.render('admin/registreMovie.njk');
});

routes.get('/login/', function(req, res) {
  return res.render('login.njk');
});

routes.get('/register/', function(req, res) {
  return res.render('register.njk');
});

module.exports = routes;
