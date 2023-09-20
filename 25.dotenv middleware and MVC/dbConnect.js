const mongoose = require("mongoose");
const User = require("./models/user");

const mongoUrl =
  "mongodb+srv://rahul:tGlMpbDKZjtZNf5V@cluster0.zjdpm1d.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

// Use async/await to connect to the database
module.exports = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      serverApi: {
        version: "1", // Set the serverApi version as a string
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// connectToDatabase();
