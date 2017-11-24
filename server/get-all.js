var datas = require('./datas');

const express = require('express')
const router = express.Router()

router.get('/contacts', (req, res) => {
    res.json(datas)
})

module.exports = router;