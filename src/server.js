const express = require('express');
var bodyParser = require('body-parser');
const {random} = require('lodash');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/random', function (request, response) {
  const {min, max} = request.body;
  response.json({min, max, random: random(min, max)});
});

app.listen(3000, function () {
  console.log('Your app is listening on port http://localhost:3000 🎉');
});
