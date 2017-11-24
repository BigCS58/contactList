var datas = require('./datas');

const express = require('express');
const router = express.Router();

router.delete('/contacts/:name', (req, res) => {
    let index = datas.findIndex((data) => {
        if (req.params.name == data.firstname) {
            return data;
        }
    });
    datas.splice(index, 1);
    res.json(datas);
})

module.exports = router;