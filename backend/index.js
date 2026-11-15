const express = require("express");
const User = require('./models/user.js')
const fs = require("fs");
const cors = require("cors");

const { type } = require("os");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const {router} = require('./routes/userlogs.js')
const sRouter = require('./routes/seller.js')
const bRouter = require('./routes/buyer.js')
const verifyUser = require('./routes/userlogs.js')

const multer = require('multer');
const Property = require('./models/propt.js')

// const upload = multer({dest: 'upload/'}) //middleware

const storage = multer.diskStorage({
  destination: function(res,file,cb){
    return cb(null,'./uploads');
  },  //where to store the particular file - original file
  filename: function (req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`);
  }
});

const upload = multer ({storage})

const app = express();
const salt = 10;
const port = 8000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json()); // pass json that coming any from requests
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(cookieParser())

//Routers
app.use(router);
app.use(sRouter);
app.use(bRouter);








// mongoose.connect('mongodb://localhost:27017/LandBook')
// .then(()=> console.log('mongodb connected'))
// .catch((err)=>console.log('mongo err',err));




// app.post("api/users", async (req,res)=>{
//     const body = req.body;
//     const result = await User.create({
//         firstName : body.first_name,
//         lastName : body.last_name,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.job_title,
//     });

//     console.log('result',result);
//     return res.status(201).json({msg:'success'})

// })



// --------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------


app.get("/adashboard", async (req, res) => {
  try {
    const body = req.body;
    const response = await User.find({});
    console.log(response)
    if (response.length > 0 ) {
      return res.json({ response });
    } else {
      return res.json({ msg: "no users " });
    }
  } catch (error) {
    console.log(error);
  }
});

// app.get("/api/users", async (req, res) => {
//   try {
//     const result = await User.find({});
//     return res.json({ msg: result });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ msg: "internel server Error" });
//   }
// });

// const collegeSchema = new mongoose.Schema({
//   collegeName: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   collegeAddress: {
//     type: String,
//   },
//   collegeEstd: {
//     type: String,
//   },
// });

// const College = mongoose.model("college", collegeSchema);

// app.post("/colleges", async (req, res) => {
//   const body = req.body;
//   const result = await College.create({
//     collegeName: body.name,
//     collegeAddress: body.address,
//     collegeEstd: body.estd,
//   });

//   console.log("result", result);
//   return res.status(201).json({ msg: "success" });
// });

// app.get("/colleges", async (req, res) => {
//   try {
//     const data = await College.find({ collegeName: "texas college" });
//     res.send(data);
//     return res.json(data);
//   } catch (err) {
//     return res.json({ msg: "no data is found" }, err);
//   }
// });


// app.post('/signup',async(req,res)=>{
//     const body = req.body;
//     const Username = await body.Username
//     const Email = await body.Email
//     const Password = await body.Password
//     const Gender = await body.Gender

//     console.log(Username+ Email + Password)

//     return res.json({msg: 'success'})
// })

app.post('/sdashboard', upload.single('profileImage'), async (req, res) => {
  console.log(req.body); // Form data
  console.log(req.file); // File data
  console.log(req.body.Location)
  // Create a new property document and save it to MongoDB
  const newProperty = new Property({
    Location: req.body.Location,
    Kitta: req.body.Kitta,
    Price: req.body.Price,
    Roadaccess: req.body.Roadaccess,
    Ownername: req.body.Ownername,
    Description: req.body.Description,
    Gallery: req.file.path, // Save the file path to the Gallery field
  });

  try {
    await newProperty.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
});


app.listen(port, () => {
  console.log("server is running" + port);
});
