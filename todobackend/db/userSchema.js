const mongoose=require('mongoose');
const userSchema=new  mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
       
    },
    logo:{
        type:String
    }
})
module.exports=mongoose.model('user',userSchema)