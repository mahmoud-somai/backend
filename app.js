const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json('Another Update By Me ');
}
);
app.get('/api',(req,res)=>{
    res.json('test this end Point');
});

app.get('/test',(req,res)=>{
    res.json('test VScode end Point');
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);
