const mongoose=require('mongoose');
require('dotenv').config();
const connectDB=async()=>{
   try{
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Mongodb connected");
   }catch(err){
       console.log("Error connecting to the mongodb",err);
   }
}
module.exports=connectDB;