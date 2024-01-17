const express = require('express')
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authRoute=require("./routes/auth.js")
const postRoute=require("./routes/post.js")
const doctorRoute=require("./routes/doctor.js")
const userRoute=require("./routes/user.js")
const appointmentRoute=require("./routes/appointment.js")
const notifRoute=require("./routes/notif.js")
const app=express()
const cors = require("cors");
app.use(cors());

dotenv.config()

app.use(express.json())

const connect = async()=>{
    await mongoose.connect(process.env.db);
    console.log("Connected with database !!! ")
};


app.use("/api/user",authRoute); 
app.use("/api/posts",postRoute) 
app.use("/api",doctorRoute)
app.use("/api",userRoute)
app.use("/api",appointmentRoute)
app.use("/api",notifRoute)




app.get('/test',(req,res)=>{
    res.json(' Test Endpoint');
});



app.get('/',(req,res)=>{
    res.json('Hello  Mr');
});




app.listen(4000,()=>{
    connect()
    console.log("connected with succes to backend")
})
