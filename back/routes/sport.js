// Sport.js

const {Sport}=require('../models/Sport');
const User=require('../models/User');
// const multer = require('multer');
const express = require('express');
const router = express.Router();
const fs=require('fs');
const _=require('lodash');



router.post('/add/:id', function(req, res){
    let id=req.params.id;
    const newSport = new Sport;
    User.findById(id).then(user=>{
      if(user.admin){
        newSport.sportName=req.body.sportName;

         newSport.sportImage.data=req.body.data;
         newSport.sportImage.contentType=req.body.contentType;
         newSport.sportImage.imageName=req.body.ImageName;

         newSport.save().then(sprt=>{
             res.status(200).send(sprt);
         }).catch(err=> res.status(400).send(err))
      }
      else {
        res.status(400).send({message:'Not Authorized'})
      }
    });


});


router.put('/update/:id',(req,res)=>{
    let id=req.params.id;
    var body=_.pick(req.body,['sportName','links','data','contentType','fileName']);
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
    router.delete('/delete/:id',(req,res)=>{
      let id=req.params.id;
      let body=_.pick(req.body,['deletedAt','isDeleted']);
      body.isDeleted=true;
      body.deletedAt=new Date().getTime();
      Sport.findByIdAndUpdate(id,{$set:body},{new:true}).then((user)=>{
        if(!user)  res.status(404).send({message:'sport not found'});
        res.status(200).send({message:'Successfuly Delete'});
          }).catch((e)=>{
            res.status(400).send(e);
          });
      });

router.get('/getall',(req,res)=>{
  Sport.find().then(sport=>{
    if(!sport) res.status(404).send({message:'sport not found'})
    res.status(200).send(sport);
  }).catch(err=>res.status(400).send(err));
});

router.get('/get/:id',(req,res)=>{
  let id=req.params.id;
  Sport.findById(id).then(sport=>{
      if(!sport) {
          console.log('----------------',sport);
          return res.status(404).send({message:'Sport not found'});}
      let isdel=sport.isDeleted;
      if(isdel) return res.status(404).send({message:'Sport is "Deleted".'})
      else{
          return res.status(200).send(sport);
      }
  }).catch(
  err=>{  res.status(400).send(err)
    // console.log('++++++++++++',err)
  }

    );
})



module.exports = router;
