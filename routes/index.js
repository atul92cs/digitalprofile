const express=require('express');
const db=require('../config/database');
const router=express.Router();
router.get('/create',(req,res)=>{
    res.render('createprofile');
});
router.get('/updateprofile/:id',(req,res)=>{
   const {id}=req.params;
   let sql='select * from skill where userId=?';
   let query=db.query(sql,[id],(err,result)=>{
        if(err)
        {
             res.render('updateprofile',{msg:err,layout:'editprofile'});
        }
        else 
        {
             res.render('updateprofile',{skills:result,layout:'editprofile'});
        }
   });
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
router.get('/getuser/:id',(req,res)=>{
    const {id}=req.params;
    let sql='select * from user where id=?;select * from skill where userId=?';
    
    let query=db.query(sql,[id,id],(err,response)=>{
       if(err)
       {
           res.render('viewuser',{error:err});
       }
       else 
       {
            res.render('viewuser',{users:response[0],skills:response[1]});
        
       }
    });
});
module.exports=router;