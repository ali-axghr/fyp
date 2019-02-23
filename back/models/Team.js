// name,captain,sport,picture,discription
// Team Models

const mongoose = require('mongoose');
const _ = require('lodash');

const TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required:true,

    },
    captain: {
        type: String,
        required: true
    },
    teamImage: {
        data: Buffer, contentType: String, imageName: String
    },
    discription: {
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
    sport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sport",
      // required: 'Sport is required',
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }
},
    {
        timestamps: true
    });

const Team = mongoose.model('team', TeamSchema);
module.exports = { Team };
