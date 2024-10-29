const express = require('express');
const app = express();
const port = 3000;

app.get("/",async(req, res)=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let response = await data.json();
    res.json(response)
    console.log("helloo")
})
app.get("/manu",(req,res)=>{
    res.json({message:"its working"})
})

app.listen(port,()=>{
    console.log("successfully running!!")
})