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

router.patch("/notification/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { message } = req.body; // Assuming the updated message is sent in the body

        const updateNotif = await Notif.findByIdAndUpdate(id, { message }, { new: true });

        if (!updateNotif) {
            return res.status(404).json({ error: "Notification not found" });
        }

        return res.status(200).json(updateNotif);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
});

  
  
  

router.patch("/Notif", async (req, res) => {
    try {
      // Find all notifications
      const allNotifications = await Notif.find();
      
      // Filter the notifications where Status is false
      const notificationsToUpdate = allNotifications.filter(notification => !notification.Status);
      
      // Update the Status to true for the filtered notifications
      const updatePromises = notificationsToUpdate.map(notification => {
        return Notif.findByIdAndUpdate(notification._id, { Status: true });
      });
  
      // Execute all update operations
      await Promise.all(updatePromises);
  
      res.status(200).json({ message: 'Notifications updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  




module.exports=router