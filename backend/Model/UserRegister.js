const mongoose =require("mongoose")

const UserRegisterSchma=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"user"
    }
})

const RegisterModel=mongoose.model("registerlist",UserRegisterSchma)
module.exports=RegisterModel;