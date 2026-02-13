const mongoose = require("mongoose");
const encodedPassword = encodeURIComponent("Paramesh@419");
const url = `mongodb+srv://parameshwaran_r:${encodedPassword}@parameshlearnings.hemfvib.mongodb.net/devTinder`;

const connectDB = async () => await mongoose.connect(url);

module.exports = connectDB;
