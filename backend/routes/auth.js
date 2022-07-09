const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must have 5 character').isLength({ min: 5 }),
] ,(req, res)=>{
    // obj = {
    //     name: "Raj",
    //     number: 458
    // }
    // res.json(obj)
    // console.log(req.body)
    // const user = User(req.body)
    // user.save();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch (err =>{ console.log(err)
      res.json({error: 'Please enter a unique value for email', message: err.message})})

    // res.send(req.body)
});

module.exports = router