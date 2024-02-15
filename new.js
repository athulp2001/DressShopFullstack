const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path =require("path")


const adminregister = require('./Model/adminreg');
const adminMenModel=require("./Model/adminMen")

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/shoes");

app.listen(7000, () => {
    console.log("SERVER IS RUNNING!!!!!!!!!!!!");
});

// ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN 

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then((hash) => {
            adminregister.create({ name, email, password: hash })
                .then(user => { res.json(user) })
                .catch(err => { res.json(err) });
        });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await adminregister.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(
                { userid: user._id, email: user.email, role: user.role },
                "your_secret_key",
                { expiresIn: "1h" }
            );
            res
                .status(200)
                .json({ message: "Login Successfully!!", token, role: user.role });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});



// men Admin
const storage = multer.diskStorage({
  destination: "../aclint/src/Admin/MenAdmin/MendAdImage",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/admensubmit", upload.fields([{ name: 'mainImg' }, { name: 'img1' }, { name: 'img2' }, { name: 'img3' }, { name: 'img4' }]), async (req, res) => {
  try {
    const admenData = new adminMenModel({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      off: req.body.off,
      price: req.body.price,
      discount: req.body.discount,
      color:req.body.color,
      category:req.body.category,
      brand:req.body.brand,
      size:req.body.size,
      mainImg: req.files['mainImg'][0].filename,
      img1: req.files['img1'][0].filename,
      img2: req.files['img2'][0].filename,
      img3: req.files['img3'][0].filename,
      img4: req.files['img4'][0].filename,
    });
    await admenData.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get("/getadmen",(req,res)=>{
  adminMenModel.find()
  .then(user=>{res.json(user)})
  .catch(err=>{res.json(err)})
})