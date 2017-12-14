var datas = require('./datas');
const express = require('express');

const router = express.Router();

router.put('/contacts/:id', (req, res) => {
    let index = req.params.id
    let editFriend = req.body;
    for (let i = 0; i < datas.length; i++) {
        if ((datas[i].firstname == editFriend.firstname || datas[i].email == editFriend.email) && i != index) {
            index = -1;
            break;
        }
    }


    if (index == -1) {
        res.json({ alert: 'Email or Firstname has already !' });
    }
    else {
        editFriend.createdAt = Date.now();
        datas[index] = editFriend;
        res.json(datas);
    }
})

module.exports = router;