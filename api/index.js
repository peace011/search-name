import express from "express";
const app=express();
import cors from 'cors';
import {Users} from './users.js'; 

app.use(cors());

app.get('/',(req,res)=>{
    const {q}=req.query;
    const keys=['first_name','last_name','email']

  const search=(data)=>{
    return data.filter(user=>keys.some(key=>user[key].toLowerCase().includes(q)))
  }
  q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

// app.listen(5000, ()=>console.log("Api is working"));
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});