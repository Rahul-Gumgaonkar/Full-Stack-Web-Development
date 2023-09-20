const mongoose = require("mongoose");
const User = require("./models/User");

const mongoUrl =
  "mongodb+srv://rahul:tGlMpbDKZjtZNf5V@cluster0.zjdpm1d.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

// Use async/await to connect to the database
async function connectToDatabase() {
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
}

connectToDatabase();

async function createUser(newUser) {
  const user = new User(newUser); // in memory user document created

  //   user.save().then((data) => {
  //     console.log("user added");
  //   });

  const data = await user.save(); // user saved inside database
  console.log(data);
  console.log(user);
}

async function findUser() {
  //   const users = await User.find();
  //   const user = await User.findById("6505bd288bbdeb1d0c23564e");
  // const user = await User.find({email: 'rahul@gmail.com',})
  // const user = await User.find({ marks: { $gt: 90 } });
  const user = await User.find({ email: { $regex: "hu" } });
  console.log(user);
  return user;
}

// async function updateMarks(userId, marks) {
//   const user = await User.findById(userId);
//   // user.marks = marks;
//   const updatedUser = await user.save();
//   console.log(updatedUser);
// }

// async function deleteUser(userId) {
//   const user = await User.findById(userId);
//   user.delete();
// }

// deleteUser("6505de7154d62aa3fe695964");
// updateMarks("6505de7154d62aa3fe695964", 56);

// findUser();

// createUser({
//   email: "rahul@gmail.com",
//   password: "1234",
//   marks: 94,
// });
