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


<<<<<<< HEAD
app.get('/vs',(req,res)=>{
    res.json('Update for VScode ');
=======
app.get('/',(req,res)=>{
    res.json('Update Code');
>>>>>>> e26c182756677c833ecdfed0739221883e0f8c81
}
);


app.get('/test',(req,res)=>{
    res.json('VScode endPoint');
});





app.listen(4000,()=>{
    connect()
    console.log("connected with succes to backend")
})
