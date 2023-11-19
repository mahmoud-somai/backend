const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json('Another Update Backend From Me Mahmoud');
}
);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);
