const User = require("../models/User");
const router = require("express").Router()


router.get("/Listusers", async (req, res) => {
    try {
        const Users = await User.find();
        const usersCount = await User.countDocuments(); // Fetch count of users

        res.status(200).send({
            users: Users,
            NbUsers: usersCount // Include count in the response object
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving users");
    }
});


router.get("/user/:id",async(req,res)=>{
    try {
        const specificUser=await User.findById(req.params.id);
        res.status(200).json(specificUser)
    } catch (error) {
        console.log(error)
    }
})


router.patch("/user/:id",async(req,res)=>{
    try {
        const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/user/:id",async(req,res)=>{

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Has Been Deleted !!! ")
    } catch (error) {
        console.log(error)
    }
})

module.exports=router