
const mongoose=require("mongoose")


const NotifSchema=new mongoose.Schema({
    message:{
        type:String,
    },
    idUser:{
        type:String,   
    },
    idDoctor:{
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

module.exports=mongoose.model("Notif",NotifSchema)