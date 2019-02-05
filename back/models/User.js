const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const validator=require('validator');
const UserSchema=new Schema({
  name:{
    type:String,
    required:true

  },
  email:{
    type:String,
    required:true,
    // unique:true,
    // validate:{
    //   validator:validator.isEmail,
    //   message:'email is not valid',

    // }
  },
  password:{
    type:String,
    required:true
  },
  avatar:{
    type:String
  },
  date:{
    type:Date,
    default:Date.now
  },
  available:{
    type:Boolean,
    default:false,   
  },
  isDeleted:{
    type:Boolean,
    default:false,   
  },
  deletedat:{
   type:Date,
  },
  privacy:{
   type:Boolean,
   default:false,
  },
});
const User=mongoose.model('users',UserSchema);
module.exports=User;
