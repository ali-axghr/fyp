///  Sport Model

const mongoose=require('mongoose');
const validator=require('validator');

const sportSchema=new mongoose.Schema({
s_name:{
type:String,
required:true,
unique:true
},
links:{
type:String,
},
sportImage:{
    data:Buffer,contentType:String,imageName:String,
}


},
 {
    timestamps: true
});

var Sport=mongoose.model('sport',sportSchema);
module.exports={Sport};