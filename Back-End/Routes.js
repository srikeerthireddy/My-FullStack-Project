const {CricketModel}=require('./Schema');
const {Router,application}=require("express");

const cricketRoute=Router();

//post
cricketRoute.post("/create", async(req,res)=>{
    try{
      const prod=await CricketModel.create(req.body);
      res.status(200).send({msg:"Data created successfully",prod});
    }catch(error){
      res.status(200).json({errMsg:"Invalid post request",error});
    }
});

//get
cricketRoute.get("/read",async(req,res)=>{
    try{
        const prod=await CricketModel.find();
        res.status(200).send({msg:"Data recieved"});
    }catch(error){
       res.status(500).json({errMsg:"Indvlaid get request",error});
    }   
});

//update
cricketRoute.put("/update/:id",async (req,res)=>{
    try{
      const product=await CricketModel.findByIdAndUpdate(req.params.id,req.body);
      if(!product){
        return res.status(404).json({message:"Cricketer not found"});
      }

      res.status(200).json({msg:"Cricketer is updated successfully"});
    }catch(error){
      res.status(500).json({message:error.message})
    }
})

//delete
cricketRoute.delete("/delete/:id",async (req,res)=>{
    try{
      const product=await CricketModel.findByIdAndDelete(req.params.id);
      if(!product){
        return res.status(404).json({message:"Crickter not found"});
      }
      res.status(200).json({msg:"Crickter deleted successfully"});
    }catch(error){
      res.status(500).json({message:error.message})
    }
});
module.exports={cricketRoute};