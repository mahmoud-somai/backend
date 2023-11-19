const Appointment = require("../models/Appointment");
const router = require("express").Router()

router.get("/Appointment",async(req,res)=>{
    try {
        const Appointments=await Appointment.find();
        res.status(200).send(Appointments)
    } catch (error) {
        console.log(error);
    }
})

router.post("/Appointment",async(req,res)=>{
    try{
    const newAppointment=new Appointment(req.body)
    await newAppointment.save()
    res.status(200).send("Appointment saved With Success")
    }catch(error){
        console.log(error);
    }

})

module.exports=router
