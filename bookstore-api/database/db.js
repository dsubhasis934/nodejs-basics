const mongoose = require("mongoose");
const mongoDbUrl = process.env.MONGODB;

const connectToDb = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log("mongodb is connected successfully");
  } catch (error) {
    console.error("database connection failed", error);
  }
};

module.exports=connectToDb
