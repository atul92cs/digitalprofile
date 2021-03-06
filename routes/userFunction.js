const express=require('express');
const router=express.Router();
const db=require('../config/database');
 
router.get('/',(req,res)=>{
   let sql='SELECT * FROM user';
   let query=db.query(sql,(err,result)=>{
     if(!err)
     {
        if(result.length>0)
        {
              res.status(200).json({
                users:result
              });
        }
        else
        {
            res.status(401).json({
              msg:'no users found'
            });
        }
     }
     else
     {
       res.status(402).json({
         msg:err
       })
     }
   });
});
router.get('/:id',(req,res)=>{
  const {id}=req.params;
  let sql='select * from user where id=?';
  let query=db.query(sql,[id,id],(err,response)=>{
    if(!err)
    {
         res.status(200).json({
           user:response[0]
         });
    }
    else
    {
         res.status(401).json({
           error:err
         });
    }
  });
});
router.put('/updateuser',(req,res)=>{
   
   const {id,name,highschool,seniorsecondary,college,branch}=req.body;
   let sql='update user set Name=?,Highschool=?,Seniorsecondary=?,College=?,Branch=? where id=?';
   let query=db.query(sql,[name,highschool,seniorsecondary,college,branch,id],(err,result)=>{
      if(err)
      {
         res.status(401).json({
           msg:err
         });
      }
      else
      {
           res.status(200).json({
             msg:'user updated'
           });
      }
   });
});
router.delete('/deleteuser/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from user where id=?;delete from skill where userId=?';
    let query=db.query(sql,[id,id],(err,result)=>{
      if(err)
      {
          res.status(401).json({
            msg:err
          });
      }
      else
      {
             res.status(200).json({
               msg:'user deleted'
             });
      }
    });
});
router.get('/getinfo/:id',(req,res)=>{
  const {id}=req.params;
  let sql='select * from user where id=?;select * from skill where userId=?';
  let query=db.query(sql,[id,id],(err,response)=>{
    if(!err)
    {
       res.status(200).json({
         user:response[0],
         skills:response[1]
       });
    }
    else
    {
       res.status(401).json({
         error:err
       });
    }
  });
});
router.post('/add',(req,res)=>{
   const {name,highschool,seniorsecondary,college,branch}=req.body;
   let body={Name:name,Highschool:highschool,Seniorsecondary:seniorsecondary,College:college,Branch:branch};
   let sql='INSERT INTO user SET ?';
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
          msg:'profile created'
      });
      }
   });
});
module.exports=router;