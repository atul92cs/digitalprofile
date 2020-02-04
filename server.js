const express=require('express');
const user=require('./routes/userFunction');
const skill=require('./routes/skillFunction');
const index=require('./routes/index');
const exphbs=require('express-handlebars');
const db=require('./config/database');
const PORT=process.env.PORT||8080;
const path=require('path');
const app=express();
//app.set('views',path.join(__dirname,'views'));
db.connect(err=>{
  if(err) throw err;
  
  console.log('database connected');
  
});
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','handlebars');
app.engine('handlebars',exphbs({defaultlayout:'main'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',index);
app.use('/user',user);
app.use('/skill',skill);
app.listen(PORT,()=>{
  console.log('Server started');
});