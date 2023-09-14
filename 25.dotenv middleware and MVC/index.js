const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// OR
// require("dotenv").config();

const express = require("express");
const mainRouter = require("./Routes/index");
const app = express();

app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send({
    data: "ok",
    name: "Rahul",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("started listing on port : ", PORT);
});
