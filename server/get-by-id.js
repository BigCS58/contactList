const express = require('express')
const router = express.Router()

router.get('/contacts/:id',(req,res) =>{
    let byID = req.params.id;
    res.json(datas[byID]);
})

module.exports = router;
