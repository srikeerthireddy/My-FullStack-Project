const mongoose=require('mongoose');
require('dotenv').config();
const connectDB=mongoose.connect(process.env.MONGODB_URI,{
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(()=>console.log('Connected to MONGODB'))
.catch(err=>{
   console.log("Error in the MONGODB",err);
   process.exit(1);
})

module.exports=connectDB;