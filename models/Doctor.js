const mongoose=require("mongoose")


const DoctorSchema=new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true,
        min:3
    },
    lastName:{
        type:String,
        required:true,
        min:3
    },
    speciality:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        
    },
    phoneNumber:{
        type:Number,
        required:true,
        min:8
    },
    location:{
        type:String,
        
    },
    timeWorkStart:{
        type:String,
        required:true,
    },
    timeWorkEnd:{
        type:String,
        required:true,
    },
    startDay:{
        type:String,
        required:true,
    },
    endDay:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        
    },
    price:{
        type:Number,
          required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,

    },

})

module.exports=mongoose.model("Doctor",DoctorSchema)