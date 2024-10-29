const express = require('express');
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let response = await data.json();
  res.json(response);
});

app.get("/manu", (req, res) => {
  res.json({ message: "It's working" });
});

app.get("/api", (req, res) => {
  res.json({ message: "API route is working" });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
