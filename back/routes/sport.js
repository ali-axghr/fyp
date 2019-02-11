const {Sport}=require('../models/Sport');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const fs=require('fs');
const _=require('lodash');


/// Set Storage

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString()+file.originalname);
    }
  })
   
  var upload = multer({ storage: storage })

router.post('/addSport',upload.single('sportImage'), function(req, res){
    // console.log(req.file);
    const newSport = new Sport;
        newSport.s_name=req.body.s_name;
         newSport.links=req.body.links;
         let buff=fs.readFileSync(req.file.path);
         newSport.sportImage.data=buff.toString('base64')
         newSport.sportImage.contentType=req.file.mimetype;
         newSport.sportImage.imageName=req.file.filename;
        

        
//    let buff = fs.readFileSync('stack-abuse-logo.png');  
//      let base64data = buff.toString('base64');

         ////////////////
         newSport.save().then(sprt=>{
             res.status(200).send(sprt);
         }).catch(err=> res.status(400).send(err))
    
});
router.put('/get/:id',(req,res)=>{
    let id=req.params.id;
    var body=_.pick(req.body,['s_name','links']);
        // body.updatedAt=new Date().getTime();
        
        Sport.findByIdAndUpdate(id,{$set:body},{new:true}).then((sprt)=>{
            if(!sprt){
              res.status(404).send({message:'Sport not found'});
            }
            res.status(200).send(sprt);
          }).catch((e)=>{
            res.status(400).send(e);
          });
    
    });



module.exports = router;