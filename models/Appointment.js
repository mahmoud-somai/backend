const mongoose=require("mongoose")

const AppointmentSchema=new mongoose.Schema({
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
    idDoctor:{
        type:String,
    },
    idUser:{
        type:String,
    },
    pending:{
        type:Boolean,
    },
    status:{
        type:Boolean,
    },
})

module.exports=mongoose.model("Appointment",AppointmentSchema)