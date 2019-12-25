const express=require('express');
const db=require('../config/database');
const router=express.Router();
router.get('/create',(req,res)=>{
    res.render('createprofile');
});
router.get('/updateprofile/:id',(req,res)=>{
   const {id}=req.params;
   res.render('editprofile',{id:id});
});
router.get('/',(req,res)=>{
    let sql='select * from user';
    let query=db.query(sql,(error,response)=>{
       if(!error)
       {
             if(response.length>0)
             {
                 res.render('home',{user:response});
             }
             else 
             {
                 res.render('home',{msg:'User not found'});
             }
       }
       else
       {
             console.log(error);
       }

    });
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='select * from user where id=?;select * from skill where userId=?';
    
    let query=db.query(sql,[id,id],(err,response)=>{
       if(err)
       {
            res.status(401).json({
                msg:err
            });
       }
       else 
       {
            res.render('user',{user:response[0][0],skill:response[1]});
       }
    });
});
module.exports=router;