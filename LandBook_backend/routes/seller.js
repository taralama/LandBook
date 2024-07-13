const express = require('express');
const Property = require('../models/propt')

const User = require('../models/user')
const sRouter = express.Router()


// sRouter.get('/sdashboard',(req,res)=>{
//     const response = User.find({})
//     res.json({Status : 'fetched with '})
// })

sRouter.get('/addproperty',(req,res)=>{
    const response = Property.find({})
    res.json({Status: ' add property'})
})

module.exports = sRouter