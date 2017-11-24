const express = require('express');
const bodyParser = require('body-parser');
var datas = require('./datas');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var datas = require('./datas');



module.exports = app;