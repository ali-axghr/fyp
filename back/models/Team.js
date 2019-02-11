// name,captain,sport,picture,discription
// Team Models

const mongoose=require('mongoose');
const _=require('lodash');

const TeamSchema=new mongoose.Schema({
t_name:{
type:String,

},
captain:{
type:String,
required:true
},
teamImage:{
data:Buffer, contentType:String,imageName:String
},
discription:{
type:String,
}
});

const Team=mongoose.model('team',TeamSchema);
module.exports={Team};