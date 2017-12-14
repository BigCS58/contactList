var datas = require('./datas');

const express = require('express');
const router = express.Router();

router.post('/contacts', (req, res) => {
    let newContact = req.body;
    let index = -1;
    index = datas.findIndex((data) => {
        if (newContact.firstname == data.firstname || newContact.email == data.email) {
            return data;
        }
    });
    if (index == -1) {
        newContact.createAt = Date.now();
        datas.push(newContact);
        res.json(datas);
    }
    else {
        res.json({ alert: 'Email or Firstname has already !' });
    }

})

module.exports = router;