const mongoose = require("mongoose");

const connectDB = async ()  => {
    await mongoose.connect("mongodb+srv://carryminati1888888:V2eCyp32LEY5zzur@namstenode.hzfwq6d.mongodb.net/devTinder");
};
module.exports = connectDB;
