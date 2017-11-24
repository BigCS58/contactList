const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var datas = require('./datas');

app.get('/', (req, res) => {
    res.json(datas)
})



module.exports = app;