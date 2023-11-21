const express=require('express');
const appointmentRoute=require("./routes/appointment.js")
const mongoose=require("mongoose")
const app=express();
const dotenv=require("dotenv")
const cors = require("cors");
app.use(cors());

dotenv.config()

app.use(express.json())

//app.use(express.json())

const connect = async()=>{
    await mongoose.connect(process.env.db);
    console.log("Connected with database !!! ")
};


app.use("/api",appointmentRoute)

app.get('/vs',(req,res)=>{
    res.json('VS ENDPT');
});




app.get('/test',(req,res)=>{
    res.json('Test EndPoint');
});

app.get('/',(req,res)=>{
    res.json('Start endPoint');
});





app.listen(4000,()=>{
    connect()
    console.log("connected with succes to backend")
})
