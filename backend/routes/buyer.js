const express = require('express')
const bRouter = express.Router()
const Property = require('../models/propt');
const path = require('path');
const User = require('../models/user');
const {verifyUser} = require('./userlogs')
const cookieParser = require("cookie-parser");

// Serve static files from the "uploads" directory
const uploadsPath = path.resolve(__dirname, '..', 'uploads'); // Adjust this if your folder structure is different
bRouter.use('/uploads', express.static(uploadsPath));


bRouter.get('/bdashboard',verifyUser,async (req,res)=>{
    try {
        console.log("verifyUser middleware executed");
        const response = await Property.find({})
        // console.log(response)
        return res.json({Status: 'Success',mainData : response})

    } catch (error) {
        console.log(error)
    }    
})

bRouter.post('/bsaveprop',async(req,res)=>{
    try {
        const response = await User.insertOne({Usersaveprop: req.body.id})
        return res.json({Status: 'Success'})
    } catch ( error){
        console.log(error)
    }
})

module.exports = bRouter