const mongoose =require("mongoose")

const ProductAdmin=mongoose.Schema({
    Title:String,
    Brand:String,
    Description:String,
    Category:String,
    Subcategory:String,
    Price:String,
    Discount:String,
    OfferPer:String,
    Age:String,
    Size:String,
    Color:String,
    Meterial:String,
    Stock:String,
    ImageMain:String,
    Image1:String,
    Image2:String,
    Image3:String,
    Image4:String,

})

const ProductModel=mongoose.model("productAdmin",ProductAdmin)
module.exports=ProductModel;