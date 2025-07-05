const express = require("express");
const { userAuth } = require("./middleware/auth");

const app = express();

app.get("/getUserData", (req , res) => {

  throw new Error("ambupada");
  res.send("User data sent");
});

app.use("/", (err , req , res , next) => {
  if (err) {
    //Log all your error message
    res.status(500).send("Something went wrong");
  }
});


app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});