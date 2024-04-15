const mongoose=require('mongoose');

const cricketSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    iplTeam:{
        type:String,
        required:true
    }
});
const CricketModel=mongoose.model('Cricket',cricketSchema);
module.exports={CricketModel};