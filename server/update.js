var datas = require('./datas');
const express = require('express');

const router = express.Router();

router.put('/contacts/:name', (req, res) => {
    let index = datas.findIndex((data) => {
        if (req.params.name == data.firstname) {
            return data;
        }
    });

    let editFriend = req.body;
    editFriend.createdAt = Date.now();
    datas[index] = editFriend;
    res.json(datas);
})

module.exports = router;