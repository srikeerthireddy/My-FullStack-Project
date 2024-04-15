const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./config/db');
const port=4004;
require('dotenv').config();
const app=express();

app.use(express.json());
app.post('/',(req,res)=>{
    return (res.json({name:req.body.name,squadName:req.body.squadName}));
});
connectDB.then(()=>{
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to the presentation of the cricket World",
        database:mongoose.connection.readyState===1?'connected':'disconnected'
    });
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
}).catch(err=>{
    console.log('Error connecting to MOngoDB',err)
})
