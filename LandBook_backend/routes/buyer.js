const express = require('express')
const bRouter = express.Router()
const Property = require('../models/propt');
const path = require('path');

// Serve static files from the "uploads" directory
const uploadsPath = path.resolve(__dirname, '..', 'uploads'); // Adjust this if your folder structure is different
bRouter.use('/uploads', express.static(uploadsPath));


bRouter.get('/bdashboard',async (req,res)=>{
    try {
        const response = await Property.find({})
        // console.log(response)
        return res.json({Status: 'Success',mainData : response})

    } catch (error) {
        console.log(error)
    }    
})

module.exports = bRouter