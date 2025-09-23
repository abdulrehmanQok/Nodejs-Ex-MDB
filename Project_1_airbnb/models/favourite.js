const mongoose=require('mongoose');
const FvrtScheme=mongoose.Schema({
  homeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Home',
    required:true,
    unique:true
  }
})
module.exports=mongoose.model('Favourite',FvrtScheme);
