const mongoose=require("mongoose")


const UserSchema=new mongoose.Schema({

    firstName:{
        type:String,

    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
    },
    address:{
        type:String,
    },
    password:{
        type:String,
        min:8
    },
    age:{
        type:Number,
    },
    role:{
        type:String,
        default:"user"
    },
    
})

module.exports=mongoose.model("User",UserSchema)