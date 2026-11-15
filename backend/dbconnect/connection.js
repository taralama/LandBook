const mongoose = require('mongoose');


const connectToMongo = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/LandBook');
        console.log('Connected to Mongo');
    }catch(err){
        console.log('error in connection',err)
    }
}


connectToMongo();
module.exports = mongoose


