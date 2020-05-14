const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var port = 8080;
var app = express();

app.use(bodyParser.json());
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`distance-bnb reviews server listening at http://localhost:${port}`));