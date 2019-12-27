const express=require('express');
const db=require('../config/database');
const router=express.Router();
router.post('/add',(req,res)=>{
    const {id,skill}=req.body;
    let body={userId:id,Skill:skill};
    let sql='INSERT INTO skill SET ?';
    let query=db.query(sql,body,(err,result)=>{
        if(err)
        {
          res.status(401).json({
            msg:err
          });
        } 
        else
        {
             res.status(200).json({
               msg:'skill added'
             });
        }
    });
  
  });
  router.delete('/:id',(req,res)=>{
      const {id}=req.params;
      let sql='delete from skill where id=?';
      let query=db.query(sql,[id],(err,result)=>{
          if(err)
          {
              res.status(401).json({
                  msg:err
              });
          }
          else 
          {
              res.status(200).json({
                  msg:'skill deleted'
              });
             
          }
      });
  });
  router.put('/:id',(req,res)=>{
      const {id}=req.params;
      const {name}=req.body;
      const body={skill:name}
      let sql='update skill set skill= ? where id=?';
      let query=db.query(sql,[name,id],(err,result)=>{
          if(err)
          {
              res.status(401).json({
                  msg:err
              });
          }
          else
          {
              res.status(200).json({
                  msg:'Skill updated'
              });
          }
      });
  });
  module.exports=router;