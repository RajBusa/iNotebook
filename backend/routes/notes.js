const express = require('express');
const { body ,validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes')

// Route 1: GET all notes using: GET "/api/notes/fatchallnotes"
router.get('/fatchallnotes', fetchuser , async (req,res)=>{
    // console.log(res.user.);
    const notes = await Note.find({user: req.user.id});
    res.json(notes)
})

// Route 2: Add a note using: POST "/api/notes/addnote"
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min : 3 }),
    body('description', 'Description must be atleast 5 character').isLength({ min : 5 })
] ,async (req,res)=>{
    const {title, description, tag} = req.body;
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const note = new Note({
        title, description, tag, user: req.user.id 
    })
    const saveNote = await note.save();
    res.json(saveNote)
})

// Route 4: Update an existing note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req,res)=>{
    const {title, description, tag} = req.body;
    const newNote = {};

    // create newNote object
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    // Find the note to be update and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")};

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not found");
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
    res.json(note);
})

// Route 3: Delete an existing note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req,res)=>{

    // Find the note to be update and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")};

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not found");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({"Success": "Notes has been deleted", note: note});
})
  
module.exports = router;