const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req , res) => {
    //Creating a new instance of the User model
  const user = new User ({
    firstName : "Sachin",
    lastName: "Gill",
    emailId: "sachin@gmail.com",
    password: "Sachin@1717",
    gender: "Male",
    age: "67"
  });

  try {
    await user.save();
    res.send("User added successfully");
  } catch(err) {
    res.status(400).send("Error saving the user" +err.message)
  }

})


connectDB()
    .then( () => {
        console.log("database connection is established");
        app.listen(7777 , () => {
    console.log("Server is up and running on port 7777");
});
    })
    .catch((err) => {
        console.err("Database can not be connected");
    });
