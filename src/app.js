const express = require("express");

const app = express();

const {adminAuth , userAuth} = require('./middleware/auth');

//Handle Auth middleware for all type of request
app.use("/admin", adminAuth );

app.post("/user/login", (req , res) => {
  res.send("Logged in successfully");
});

app.get("/user", userAuth, (req , res) => {
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req , res) => {
    res.send("Send all data");
});

app.get("/admin/deleteUser", (req , res) => {
  //Logic for checking if the request is authorized
  res.send("Delete the user");
});


app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});