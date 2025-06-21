const express = require("express");

const app = express();

//This will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Ambupada" , lastName: "Muduli" });
});

//
app.post("/user", (req, res) => {
    res.send("Data successfully send to data bases");
})

//
app.delete("/user", (req, res) => {
    res.send("Data deleted successfully");
})

//This will match all the HTTP method API calls to /hello
app.use("/hello",(req, res) => {
    res.send("Hello welcome to dashboard");
});



app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});