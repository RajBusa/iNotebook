const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes')

// GET all notes using: GET "/api/auth/fatchallnotes"
router.get('/fatchallnotes', fetchuser , async (req,res)=>{
    // console.log(res.user.);
    const notes = await Notes.find({user: req.user.id});
    res.json(notes)
})
  
module.exports = router;