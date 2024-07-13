const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: {
      type: String,
    },
    Userfullname: {
      type: String,
    },
  
    Useremail: {
      type: String,
    },
    Userpassword: {
      type: String,
    },
    Userrole: {
      type: Number,
    },
  });

  const User = mongoose.model("user", userSchema);

  module.exports = User
  