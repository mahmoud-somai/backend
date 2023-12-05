
const mongoose=require("mongoose")


const RequestSchema=new mongoose.Schema({
    NameUser:{
        type:String,
      
        
    },
    NameDoctor:{
        type:String,
    },
    DateApp:{
        type:String, 
    },
    TimeApp:{
        type:String,
    },
    Status:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("Request",RequestSchema)