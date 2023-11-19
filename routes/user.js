const router = require("express").Router()
router.get("/Listusers",async(req,res)=>{
    try { 
        res.status(200).send(Users)
    } catch (error) {
        console.log(error);
    }
})



module.exports=router