const express = require('express');
const server = express();

server.get('/', function(req, res) {
  return res.send('MovieRetro');
});

server.listen(3333, function() {
  console.log('Server is running at the port 3333!');
});
