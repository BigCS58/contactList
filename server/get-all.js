var datas = require('./datas');

const express = require('express')
const router = express.Router()

router.get('/contacts', (req, res) => {
    let byName = req.query.name;
    if (!byName) {
        res.json(datas)
    }
    else {
        let index = -1;
        index = datas.findIndex((data) => {
            if (data.firstname == byName) {
                return data;
            }
        });
        if (index !== -1) {
            res.json(datas[index]);
        }
        else {
            res.json({ alert: 'Member is not found!' });
        }
    }
})

module.exports = router;