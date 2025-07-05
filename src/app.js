const express = require("express");

const app = express();

//app.use("/route", rH, rH2, rH3, rH4);

app.get("/user", 
  (req , res , next) => {
  //Route Handler
  //res.send("Hello");
  next();
},
(req ,res, next) => {
  res.send("Welcome 1");
  next();
},
(req ,res, next) => {
  res.send("Welcome 2");
  next();
},
(req ,res, next) => {
  res.send("Welcome 3");
  next();
},
(req ,res, next) => {
  res.send("Welcome 4");
  next();
},
);

app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});