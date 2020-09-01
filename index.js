const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome Home");
});

//if PORT dont exist add 3000
let PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("server listening");
});
