const mongoose=require('mongoose');

const schemaa=mongoose.Schema({
    namee:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
    // pin:{
    //     require:true
    // },
    // pm:{
    //     require:true
    // }
});

module.exports=mongoose.model('Schema',schemaa);