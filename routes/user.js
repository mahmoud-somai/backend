const router = require("express").Router()
router.get("/Listusers",async(req,res)=>{
    try { 
        res.json(Users)
    } catch (error) {
        console.log(error);
    }
})



module.exports=router