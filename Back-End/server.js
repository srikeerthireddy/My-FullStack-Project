const express=require('express');
const app=express();
const port=4004;
app.use(express.json());
// app.get('/',(req,res)=>{
//     return (res.json({name:req.body.name,squadName:req.body.squadName}));
// });
app.get('/',(req,res)=>{
    res.send("Back End Project");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
