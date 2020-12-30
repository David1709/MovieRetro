const fs = require('fs');
const db = require('../../../database.json');
const { v4 } = require('uuid');

const Movie = require('../models/Movie');

module.exports = {
  create (req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == '') return res.send('Please, fill all fields!');
    }

    db.movies.push({id: v4(), ...req.body});

    fs.writeFile('database.json', JSON.stringify(db, null, 2), (err) => {
      if (err) return res.send("Write file error");

      return res.redirect('/');
    });
  },

  getAll (req, res) {
    return res.render('home/index.njk', { movies: db.movies });
  }
}