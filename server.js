const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const prototypes = require('./prototypes');

const app = express();
app.use(bodyParser.json());

app.use(logger('dev'));

//app.use('/', require('./tenthings/main'));

const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
  console.log('Server ', process.pid ,' listening on', port);
});
