const mysql=require('mysql');
const db=mysql.createConnection({
   host:'remotemysql.com',
   post:'3306',                        /* Database configuration for the project */
   user:'EhmKaxRNsZ',
   password:'yB9oc5o5l2',
   database:'EhmKaxRNsZ',
   multipleStatements:true
});
module.exports=db;