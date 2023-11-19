const express=require('express');
const userRoute=require("./routes/user.js")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const app=express();
const cors = require("cors");


app.use(cors());

dotenv.config()


app.use(express.json())


const connect = async()=>{
    await mongoose.connect(process.env.db);
    console.log("Connected with database !!! ")
};

app.use("/api",userRoute)


app.get('/',(req,res)=>{
    res.json('Another Update By Me ');
}
);
app.get('/api',(req,res)=>{
    res.json('test this end Point');
});

app.get('/test',(req,res)=>{
    res.json('VScode endPoint By Me');
});





app.listen(3000,()=>{
    connect()
    console.log("connected with succes to backend")
})