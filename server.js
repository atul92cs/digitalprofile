const express=require('express');
const user=require('./routes/userFunction');
const skill=require('./routes/skillFunction');
const index=require('./routes/index');
const PORT=process.env.PORT||8080;
const path=require('path');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',index);
app.use('/user',user);
app.use('/skill',skill);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.listen(PORT,()=>{
  console.log('Server started');
});