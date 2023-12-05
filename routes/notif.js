const Notif = require("../models/Notif");
const router = require("express").Router()

router.get("/Notif",async(req,res)=>{
    try {
        const Notifs=await Notif.find();
        res.status(200).send(Notifs)
    } catch (error) {
        console.log(error);
    }
})

router.post("/Notif",async(req,res)=>{
    try{
    const newNotif=new Notif(req.body)
    await newNotif.save()
    res.status(200).send("Notification send With Success")
    }catch(error){
        console.log(error);
    }
})

router.patch("/Notif/:id",async(req,res)=>{
    try {
        const updateNotif=await Notif.findByIdAndUpdate(req.params.id,{Status:true})
        res.status(200).json(updateNotif)
    } catch (error) {
        console.log(error)
    }
})




module.exports=router