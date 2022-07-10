const express = require('express');
const { route } = require('./auth');
const router = express.Router();

route.get('/', (req,res)=>{
    res.json([])
})

module.exports = router;