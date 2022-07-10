const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Jay Swaminarayan"
// const { ResultWithContext } = require('express-validator/src/chain');


router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must have 5 character').isLength({ min: 5 }),
] , async (req, res)=>{
    // obj = {
    //     name: "Raj",
    //     number: 458
    // }
    // res.json(obj)
    // console.log(req.body)
    // const user = User(req.body)
    // user.save();

    // If there are error, return bad request and the error 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // 
    try {
        // Check wether the user with this email exist already
        let user = await User.findOne({email: req.body.email})
    
        if(user){
            return res.status(400).json({message: "Sorry a user with this email already exist"})
        }
    
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);


        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user:{
                id:user.id
            }
        }
        const jwtData = jwt.sign(data, JWT_SECRET)
        console.log(jwtData)
        res.json({jwtData})
        // res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: "some error exists"})
    }
    
});

module.exports = router