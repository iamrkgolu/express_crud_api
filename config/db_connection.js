
import {config} from './db_properties.js'
import mysql2 from 'mysql';
 export const con=mysql2.createConnection({
   host:config.host,
   user:config.user,
   database:config.dbName,
   password:config.password
})

con.connect(function(err){
   if (err){
      console.log('error connecting:' + err.stack);
    }
    console.log('connected successfully to DB.');
});
