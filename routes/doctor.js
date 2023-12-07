const router = require("express").Router()
const Doctor = require("../models/Doctor")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {registerDocValidation,loginValidation}=require('../validation.js')

router.post("/doctor",async(req,res)=>{
    const emailExist=await Doctor.findOne({email:req.body.email});
    if (emailExist) return  res.status(400).send("Existing Doctor")
   try {  
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newDoctor=new Doctor({
            ...req.body,
            password:hash,
        })
        await newDoctor.save()
        res.status(200).send(" Doctor Added With Success !!! ")
    } catch (error) {
        console.log(error)
    }
})

router.get("/Listdoctor", async (req, res) => {
    try {
        const Doctors = await Doctor.find();
        const doctorsCount = await Doctor.countDocuments(); // Fetch count of doctors
        res.status(200).send({
            doctors: Doctors,
            NbDoctors: doctorsCount // Include count in the response object
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving doctors");
    }
});


router.get("/doctor/:id",async(req,res)=>{
    try {
        const specificDoctor=await Doctor.findById(req.params.id);
        res.status(200).json(specificDoctor)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/doctor/:id",async(req,res)=>{

    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json("Doctor Has Been Deleted !!! ")
    } catch (error) {
        console.log(error)
    }
})

router.patch("/doctor/:id",async(req,res)=>{
    try {
        const updateDoctor=await Doctor.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateDoctor)
    } catch (error) {
        console.log(error)
    }
})


router.post("/doctor/logindoc",async(req,res)=>{

    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const doctor=await Doctor.findOne({email:req.body.email});
    if (!doctor) return  res.status(400).send("Invalid Email")

    const valid=await bcrypt.compare(req.body.password,doctor.password)
    !valid && res.status(400).send("wrong password")

    const token=jwt.sign({_id:doctor._id},process.env.TOKEN_SECRET)

    res.header('Authorization', token).send({
        token,
        idDoctor: doctor._id, 
        NameDoctor: doctor.firstName+" "+doctor.lastName,
        speciality:dotor.speciality,
        
        message: "Login successful",
    });
})

module.exports=router