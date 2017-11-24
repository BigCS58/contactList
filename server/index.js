const express = require('express');
const bodyParser = require('body-parser');
const getAll = require('./get-all');
const update = require('./update');
var datas = require('./datas');
var post= require('./post');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//----------------code Here -------------
app.use('/', getAll);
app.use('/', update);
app.use('/', post);
//---------------------------------------
module.exports = app;