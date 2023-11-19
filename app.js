const express=require('express');
const userRoute=require("./routes/user.js")
const mongoose=require("mongoose")
const app=express();





//app.use(express.json())




mongoose.connect('mongodb+srv://mahmoud:mahmoud147@cluster0.vt4atwo.mongodb.net/project?retryWrites=true&w=majority',
{userNewUrlParser:true},
()=>console.log('connected with DB'));


app.use("/api",userRoute)


app.get('/',(req,res)=>{
    res.json('Another Update  ');
}
);


app.get('/test',(req,res)=>{
    res.json('VScode endPoint By Me');
});





app.listen(3000,()=>{
    console.log("connected with succes to backend")
})