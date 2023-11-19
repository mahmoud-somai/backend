const mongoose=require("mongoose")


const UserSchema=new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
        min:3
    },
    lastname:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    age:{
        type:Number,
        required:true
    }
    /*,
    dateNaissance:{
        type:Date,
        default:Date.now
    }*/
})

module.exports=mongoose.model("User",UserSchema)