const express = require("express");

const app = express();

//This will only handle GET call to /user
app.use("/user", (req , res) => {
  res.send({ firstName: "Ambupada" , lastName: "Muduli" });
});

//This will only handle GET call to /user
// app.get("/user/:userId/:name/:password", (req, res) => {
//     console.log(req.params);
//     res.send({ firstName: "Ambupada" , lastName: "Muduli" });
// });

app.post("/user", (req , res) => {
  console.log(req.body);
  //saving data to DB
  res.send("Data successfully saved to DB");
});

app.delete("/user", (req , res) => {
  res.send("Deleted successfully");
});

//this will match the all the HTTP method API calls to /test
app.use("/test", (req , res) => {
  res.send("Hello from server");
});



app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});