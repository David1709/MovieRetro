const fs = require('fs');
const db = require('../../../database.json');
const { v4 } = require('uuid');

module.exports = {
    register(req, res) {
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == '') return res.send('Please, fill all fields!');
        }

      //  res.redirect('/');
    }
}