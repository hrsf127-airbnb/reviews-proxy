const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

var port = 4000;
var app = express();

const reviewsurl = 'http://54.219.71.242:3001/';

app.use(bodyParser.json());
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/reviews/:id', (req, res) => {
  axios.get(reviewsurl + `api/reviews/${req.params.id}`)
    .then((data) => {
      res.send(data.data);
    })
});

app.get('/api/owner/:id', (req, res) => {
  axios.get(reviewsurl + `api/owner/${req.params.id}`)
    .then((data) => {
      res.send(data.data);
  })
});

app.get('/api/reviews/:id/search/', (req, res) => {
  axios.get(reviewsurl + `api/reviews/${req.params.id}/search/` + `?term=${req.query.term}`)
    .then((data) => {
      res.send(data);
  })
});

app.listen(port, () => console.log(`distance-bnb reviews server listening at http://localhost:${port}`));