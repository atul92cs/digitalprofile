const mysql=require('mysql');
const db=mysql.createConnection({
   host:'localhost',
   post:'3306',                        /* Database configuration for the project */
   user:'root',
   password:'seed',
   database:'digitalprofile',
   multipleStatements:true
});
module.exports=db;