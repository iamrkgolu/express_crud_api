
import {con} from '../config/db_connection.js'


export const getUser=(req,res)=>{
   con.query ('select * from product', function(error, results){
      if (results){
       res.send(results)
      }
      else{
        console.log(error);
      }
   });
 }

 export const createUser=(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const description=req.body.description;
    const price=req.body.price;
    con.query("insert into product values("+id+",'"+name+"','"+description+"',"+price+")",(err,data)=>{
      if(data){
      res.send(req.body)
      }else{
         console.log(err)
      }
    })
    
 }

 export const getUserById=(req,res)=>{
    const id=req.params.id;
    con.query(`select * from product where id=${id}`,(err,data)=>{
      if(data){
         res.send(data)
      }else{
         console.log(err)
      }
    })
    
 }

 export const removeUserById=(req,res)=>{
    const id=req.params.id;
    con.query(`delete from product where id=${id}`,(err,data)=>{
      if(data){
         res.send(data)
      }else{
         console.log(err)
      }
    })
 }
 export const updateUserById=(req,res)=>{
    const id=req.params.id;
    const {name,description,price}=req.body;
    const findUserQuery=`select * from product where id=${id}`;
    if(findUserQuery){
      const updateQuery=`update product set name='${name}',description='${description}',price=${price} where id=${id}`;
      con.query(updateQuery,(err,data)=>{
         if(data){
            res.send(`User modified inside db with id :${id}`)
         }else{
            console.log(err)
         }
      })
    }
    
 }