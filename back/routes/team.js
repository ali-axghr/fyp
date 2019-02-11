const {Team}=require('../models/Team');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const fs=require('fs');
const _=require('lodash');

// Set Storage

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString()+file.originalname);
    }
  })
   
  var upload = multer({ storage : storage })

router.post('/addTeam',upload.single('teamImage'),(req,res)=>{
   console.log(req.file)

});

module.exports=router;




