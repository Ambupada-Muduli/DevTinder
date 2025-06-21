const express = require("express");

const app = express();

app.use("/",(req, res) => {
    res.send("Hello welcome");
});

app.use("/lol",(req, res) => {
    res.send("Hello welcome to dashboard");
});

app.use("/test",(req, res) => {
    res.send("Hello from test");
});

app.use("/server", (req, res) => {
    res.send("Hello from serverrr");
});

app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});