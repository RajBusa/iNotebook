const express = require('express')
const router = express.Router();
const User = require('../models/User')

router.post('/', (req, res)=>{
    // obj = {
    //     name: "Raj",
    //     number: 458
    // }
    // res.json(obj)
    console.log(req.body)
    const user = User(req.body)
    user.save();
    res.send(req.body)
});

module.exports = router