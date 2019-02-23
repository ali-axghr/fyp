const {Chat}=require('../models/Chat');

const express = require('express');
const router = express.Router();
const _=require('lodash');



  router.post('/add' /* , upload.single('eventImage')  */  , function(req, res){
    const newChat = new Chat;
  newChat.status = req.body.status;
  newChat.to = req.body.to;
  newChat.from = req.body.from;
  newChat.message=req.body.message;

  newChat.save().then(event => {
    res.status(200).send(event);
  }).catch(err => res.status(400).send(err))


});

router.put('/update/:id',(req,res)=>{

  let id = req.params.id;
  var body = _.pick(req.body, ['status', 'to', 'from','message']);
  // body.updatedAt=new Date().getTime();

  Chat.findByIdAndUpdate(id, { $set: body }, { new: true }).then((chat) => {
    //console.log('++++++++++++++',team);
    if (!chat) {
      res.status(404).send({ message: 'message not found' });
    }
    res.status(200).send(chat);
  }).catch((e) => {
    res.status(400).send(e);
  });
    });

    /////////////////////// Delete Route

    router.delete('/delete/:id',(req,res)=>{

      let id=req.params.id;
      let body=_.pick(req.body,['deletedAt','isDeleted']);
      body.isDeleted=true;
      body.deletedAt=new Date().getTime();
      Chat.findByIdAndUpdate(id,{$set:body},{new:true}).then((note)=>{
        if(!note)  res.status(404).send({message:'message not found'});
        res.status(200).send({message:'Successfuly Delete'});
          }).catch((e)=>{
            res.status(400).send(e);
          });

      });

      /////////////////////////// Get Route

      router.get('/get/:id',(req,res)=>{
        let id=req.params.id;
        Chat.findById(id).then(note=>{
            if(!note) {
                return res.status(404).send({message:'Message not found'});}

            let isdel=note.isDeleted;
            if(isdel) return res.status(404).send({message:'Message is "Deleted".'})
            else{
                return res.status(200).send(note);
            }
        }).catch(
        err=>{  res.status(400).send(err)
          // console.log('++++++++++++',err)
        }

          );


      });



module.exports = router;
