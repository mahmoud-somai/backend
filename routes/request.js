const Request = require("../models/Request");
const router = require("express").Router()

router.get("/Request",async(req,res)=>{
    try {
        const Requests=await Request.find();
        res.status(200).send(Requests)
    } catch (error) {
        console.log(error);
    }
})

router.post("/Request",async(req,res)=>{
    try{
    const newRequest=new Request(req.body)
    await newRequest.save()
    res.status(200).send("Request saved With Success")
    }catch(error){
        console.log(error);
    }

})

router.patch("/Request/:id",async(req,res)=>{
    try {
        const updateRequest=await Request.findByIdAndUpdate(req.params.id,{Status:true})
        res.status(200).json(updateRequest)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/Request/:id",async(req,res)=>{

    try {
        await Request.findByIdAndDelete(req.params.id);
        res.status(200).send("Request Has Been Deleted !!! ")
    } catch (error) {
        console.log(error)
    }
})

module.exports=router