var datas = require('./datas');

const express = require('express');
const router = express.Router();

router.delete('/contacts/:id', (req, res) => {
    let index = req.params.id;
    if (index !== -1) {
        datas.splice(index, 1);
        res.json(datas);
    }

})

module.exports = router;