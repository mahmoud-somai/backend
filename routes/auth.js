const router = require("express").Router()
const User = require("../models/User")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {registerValidation,loginValidation}=require('../validation.js')


router.post("/register",async(req,res)=>{
   // const { error } = registerValidation(req.body);
   // if (error) return res.status(400).send(error.details[0].message);

    const emailExist=await User.findOne({email:req.body.email});
    if (emailExist) return  res.status(400).send("Existing User")
    
   try {
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser=new User({
            ...req.body,
            password:hash,

        })
        await newUser.save()
        res.status(200).send(" User Created With Success !!! ")
    } catch (error) {
        console.log(error)
    }
})

//login 

router.post("/login",async(req,res)=>{
    
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user=await User.findOne({email:req.body.email});
    if (!user) return  res.status(400).send("Invalid Email")

    const valid=await bcrypt.compare(req.body.password,user.password)
    !valid && res.status(400).send("wrong password")

    const token=jwt.sign({_id:user._id,firstname:user.firstname,lastname:user.lastname},process.env.TOKEN_SECRET)
  
   
    res.header('Authorization', token).send({
        token,
        idUser: user._id, 
        NameUser: user.firstName+" "+user.lastName,
        role: user.role,
        message: "Login successful",
    });
    
})

module.exports=router