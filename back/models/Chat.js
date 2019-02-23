const mongoose=require('mongoose');
const validator=require('validator');

const Schema=new mongoose.Schema({
status:{
type:Boolean,
//required:true,
default:false,
},
from:{
type:String,
required:true,
},
to:{
type:String,
required:true,
},
message:{
  type: String,
},
isDeleted:{
type: Boolean,
default:false,
},
deletedAt:{
type:Date,
default:null,
},

},
 {
    timestamps: true
});

var Chat=mongoose.model('Chat',Schema);
module.exports={Chat};
