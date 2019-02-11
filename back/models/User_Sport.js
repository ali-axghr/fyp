const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    sport:[{
        type:mongoose.schema.Types.ObjectId,
        ref:"Sport",
        required:'Sport is required',
    }] ,
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            //required:true
        }
    ]

})