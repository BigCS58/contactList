var datas = require('./datas');

const express = require('express');
const router = express.Router();

router.post('/contacts', (req, res) => {
    let newContact = req.body;
    newContact.createAt = Date.now();
    datas.push(newContact); 
    res.json(datas);
})

module.exports = router;