const mongoose= require("mongoose")



const userSchema=mongoose.Schema({
  username:{
    type:String,
    required:true,
    Unique:true
  },
  password:{
    type:String,
    required:true,
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  dp:{
    type:String,
  },
  email:{
    type:String,
    required:true,
    Unique:true
  },
  fullname:{
    type:String,
    required:true,
    Unique:true
  },
})

const user=mongoose.model('User', userSchema)
module.exports=user