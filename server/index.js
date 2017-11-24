const express = require('express');
const bodyParser = require('body-parser');
const getAll = require('./get-all');
var datas = require('./datas');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//----------------code Here -------------
app.use('/', getAll);
//---------------------------------------
module.exports = app;