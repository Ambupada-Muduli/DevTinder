const express = require("express");

const app = express();

//This will only handle GET call to /user
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send({ firstName: "Ambupada" , lastName: "Muduli" });
});


app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});