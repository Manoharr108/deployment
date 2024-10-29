const express = require('express');
const app = express();
const port = 3000;

app.use("/",async(req, res)=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let response = await data.json();
    res.json(response)
})


app.listen(port,()=>{
    console.log("successfully running!!")
})