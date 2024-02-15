const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const cookieparser =require("cookie-parser")
const jwt =require("jsonwebtoken")
const bcrypt =require("bcrypt")
const multer =require("multer")
const path =require("path")

const RegisterModel =require("./Model/UserRegister")
const ProductModel =require("./Model/AdminModel/ProductAdmin")

const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); 

mongoose.connect("mongodb://127.0.0.1:27017/ShopNow")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(7000,()=>{
    console.log("SERVER IS RUNINIG!!!!")
})

////ADMIN...ADMIN //////>

//<-----Ad Register---------->

app.post("/register",(req,res)=>{
    const{ name,email,password}=req.body
    bcrypt.hash(password,10)
    .then((hash)=>{
        RegisterModel.create({name,email,password:hash})
        .then(user=>{res.json(user)})
        .catch(err=>{res.json(err)})
    });

});

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await RegisterModel.findOne({email});
        if(user&&bcrypt.compareSync(password,user.password)){
            const token=jwt.sign(
                {userid:user._id,email:user.email,role:user.role},"Your_secret_key",{expiresIn:'1h'}
            )
            res.status(200).json({message:"Login Sucessfully!!",token,role:user.role})
        }else{
            res.status(401).json({message:"Invalid Detials"})
        }

    }catch(error){
          console.log(error);
         res.status(500).json({message:"Internal server error"})
    }
})


/// Product Detials AdminMain ///
var storage =multer.diskStorage({
    destination:"../aclint/src/Compontes/Admin/MainAdmin/IMGProducts",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});

var upload =multer({storage});

app.post("/productAdmin",upload.fields([{ name: 'ImageMain' }, { name: 'Image1' }, { name: 'Image2' }, { name: 'Image3' }, { name: 'Image4' }]) ,async(req,res)=>{

    try{
        const ProductData =new ProductModel({
            Title:req.body.Title,
            Brand:req.body.Brand,
            Description:req.body.Description,
            Category:req.body.Category,
            Subcategory:req.body.Subcategory,
            Price:req.body.Price,
            Discount:req.body.Discount,
            OfferPer:req.body.OfferPer,
            Age:req.body.Age,
            Size:req.body.Size,
            Color:req.body.Color,
            Meterial:req.body.Meterial,
            Stock:req.body.Stock,
            ImageMain:req.files['ImageMain'][0].filename,
            Image1:req.files['Image1'][0].filename,
            Image2:req.files['Image2'][0].filename,
            Image3:req.files['Image3'][0].filename,
            Image4:req.files['Image4'][0].filename,
        })
        await ProductData.save()
        res.status(200).json({message: 'Form submitted successfully' })

    }catch (error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

/// START Product Detials Show AdminMain Prodct list page ///

app.get("/productlist",(req,res)=>{
     ProductModel.find()
    .then(user=>{res.json(user)})
    .catch(err=>{res.json(err)})
})
// UPDATE

app.get('/getproduct/:id',(req,res)=> {
    const id=req.params.id
    ProductModel.findById({_id:id})
    .then(result =>res.json(result))
    .catch(err =>console.log(err))
})

app.put('/updateproduct/:id', upload.fields([{ name: 'ImageMain' }, { name: 'Image1' }, { name: 'Image2' }, { name: 'Image3' }, { name: 'Image4' }]), async (req, res) => {
    const id = req.params.id;
    const { Title, Brand, Description, Category, Subcategory, Price, Discount, OfferPer, Age, Size, Color, Meterial, Stock, ImageMain, Image1, Image2, Image3, Image4 } = req.body;

    try {
        let updatedFields = { Title, Brand, Description, Category, Subcategory, Price, Discount, OfferPer, Age, Size, Color, Meterial, Stock, ImageMain, Image1, Image2, Image3, Image4 };
        if (req.files) {
            updatedFields.ImageMain = req.files['ImageMain'] ? req.files['ImageMain'][0].filename : ImageMain;
            updatedFields.Image1 = req.files['Image1'] ? req.files['Image1'][0].filename : Image1;
            updatedFields.Image2 = req.files['Image2'] ? req.files['Image2'][0].filename : Image2;
            updatedFields.Image3 = req.files['Image3'] ? req.files['Image3'][0].filename : Image3;
            updatedFields.Image4 = req.files['Image4'] ? req.files['Image4'][0].filename : Image4;
        }

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updatedFields, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/productlist/:id', (req, res) => {
    const productId = req.params.id;
    ProductModel.findById(productId)
        .then(product => res.json(product))
        .catch(err => res.json(err));
});

///END Product Detials Show AdminMain Prodct list page ///
