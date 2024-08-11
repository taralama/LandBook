const express = require("express");
const User = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const salt = 10;


const router = express.Router();


const verifyUser = (req, res, next) => {
   console.log("verifyUser middleware executed");
  const token = req.cookies.token;
 
  if (!token) {
    return res.json({ Error: 'You are not authenticated' });
  } else {
    jwt.verify(token,"jwt-secret-key", (err, decoded) => {
      if (err) {
        console.log('Token is not ok');
        return res.json({ Error: "Token is not ok" });
      } else {
        
        req.name = decoded.name;

        next();
      }
    });
  }
}



router.get('/', verifyUser, (req, res) => {
  
  
  return res.json({ Status: 'Success' });
});



router.get('/profile',verifyUser,async(req,res)=>{
  try {
    const user = await User.find({Username: req.name})
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      Status: 'Success',
      data:user
      
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
})



router.post("/signup", async (req, res) => {
    const body = req.body;
    const result = await User.find({
      $or: [{ Username: body.Username }, { Useremail: body.Email }],
    });
  
    if (result.length > 0) {
      if (result[0].Username === body.Username || result[0].Useremail === body.Email) {
        return res.json({ msg: "Username exits" });
      } else {
      }
    } else {
      bcrypt.hash(body.Password, salt, (err, hash) => {
        if (err) return res.json({ Error: "Eorrr in hashing" });
  
        try {
          
          const result = User.insertMany({
            Username: body.Username,
            Userfullname: body.Fullname,
            Useremail: body.Email,
            Userpassword: hash,
            Userrole: body.Role,
          });
  
          return res.json({ msg: "success" });
        } catch (error) {
          console.log("error in instering");
        }
      });
    }
});


router.post("/login", async (req, res) => {
    const body = req.body;
    const result = await User.find({
      Username: body.Username,
      
    });
  if(result.length > 0){
  
        bcrypt.compare(body.Password,result[0].Userpassword,(err,response)=>{
          if (err) {
              console.log(err + "error in comparing")
              res.json({Error: "password compare error"})
          }
  
          if (response) {
              const name = result[0].Username;
              
              const token = jwt.sign({name},"jwt-secret-key",{expiresIn:'1d'});
      
              res.cookie('token',token)
              
  
              res.json({msg: "Success",Role: result[0].Userrole})
          }else{
              res.json({msg: "user or password not matched"})
          }
        })
  
        
    }else {
      res.json({msg:"no username existed"})
    }
  
});



router.post("/admin", async (req, res) => {
    try {
      const body = req.body;
      const result = await User.find({
        Username: body.Username
        
      });

      console.log(result)
      if(result.length > 0){
  
        bcrypt.compare(body.Password,result[0].Userpassword,(err,response)=>{
          if (err) {
              console.log(err + "error in comparing")
              res.json({Error: "password compare error"})
          }
  
          if (response) {
              const name = result[0].Username;
              
              const token = jwt.sign({name},"jwt-secret-key",{expiresIn:'1d'});
      
              res.cookie('token',token)
              
  
              res.json({Status: "Success", Role: result[0].Userrole})
          }else{
              res.json({Status: "user or password not matched"})
          }
        })
  
        
    }else {
      res.json({Status:"no username existed"})
    }
    } catch (error) {
      console.log(error);
    }
  });
  
  
module.exports = {router,verifyUser}