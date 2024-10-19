const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Home");
});
app.use("/get1", (req, res) => {
  res.send("Hello , Namaste from the node.js");
});
app.use("/set", (req, res) => {
  res.send(" set ,welcome to port : 8000");
});
app.use("/update", (req, res) => {
  res.send("update, welcome to port : 8000");
});
app.use("/update", (req, res) => {
  res.send("update, welcome to port : 8000");
});
app.listen(8000, () => {
  console.log("server is successfully listening to port : 8000");
});
