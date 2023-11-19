const User = require("../models/User");
const router = require("express").Router()
router.get("/Listusers",async(req,res)=>{
    try {
        const Users=await User.find();
        res.status(200).send(Users)
    } catch (error) {
        console.log(error);
    }
})


router.get("/user/:id",async(req,res)=>{
    try {
        const specificUser=await User.findById(req.params.id);
        res.status(200).json(specificUser)
    } catch (error) {
        console.log(error)
    }
})


module.exports=router