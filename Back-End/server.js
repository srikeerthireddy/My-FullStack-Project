const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./config/db');
connectDB();
const port=4004;
const {cricketRoute}=require('./Routes');
const app=express();

app.use(express.json());
app.post('/',(req,res)=>{
    return (res.json({name:req.body.name,squadName:req.body.squadName}));
});

    app.get('/',(req,res)=>{
        res.json({
            message:"Welcome to the Cricket World",
            database:mongoose.connection.readyState===1?'connected':'disconnected'
        })
    })
    //routes
    app.use("/api",cricketRoute);
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })


