const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json('Another Update Backend ');
}
);
app.get('/api',(req,res)=>{
    res.json('test this end Point');
}
);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);
