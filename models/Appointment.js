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
    }
})

module.exports=mongoose.model("Appointment",AppointmentSchema)