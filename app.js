const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json('Another Update By Me ');
}
);
app.get('/api',(req,res)=>{
    res.json('test this end Point');
});

app.get('/vs',(req,res)=>{
    res.json('VScode endPoint By Me');
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);
