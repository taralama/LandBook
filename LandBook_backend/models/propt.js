const mongoose = require('../dbconnect/connection')

const proptSchema = new mongoose.Schema({
    Location: {
        type: String,
    },
    Kitta:{
        type: Number
    },
    Price:{
        type:Number
    },
    Roadaccess:{
        type: Boolean
    },
    Ownername:{
        type: String
    },
    Description:{
        type: String
    },
    Gallery:{
        type: String
    }
})

const Property = mongoose.model('property',proptSchema);

module.exports = Property;