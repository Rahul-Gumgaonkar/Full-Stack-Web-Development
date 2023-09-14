// const { multiply, log, hello, addition } = require("./utils");
// const util = require("./utils");

// console.log(multiply(4, 5));
// console.log(util.addition(4, 10, 6));

// log.warning("This is warning message");

// log.error("This is error");

// console.log(util.hello);

// instal npm i nodemon to run automatical after saving file

// rm -rf node_modules :- To delete the module file

const express = require("express");

const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
  console.log("user was called");
  // res.send("Hello User updated");
  res.json({
    name: "Rahul ",
    age: 20,
  });
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  res.send({ randomNumber });
});

app.post("/user", (req, res) => {
  console.log(req.body);

  res.json({
    name: "rahul",
    age: 20,
    multiplyResult: req.body.a * req.body.b,
  });
});

app.post("/sum", (req, res) => {
  console.log(req.body);
  res.json({
    Result: req.body.val1 + req.body.val2,
  });
});

app.post("/average", (req, res) => {
  console.log(req.body);
  res.json({
    Result: (req.body.val1 + req.body.val2) / 2,
  });
});

app.get("/", (req, res) => {
  //   res.send("Server is working");
  res.sendFile(__dirname + "/index.html");
});

app.listen(4000, () => {
  console.log("Listening on port :4000 ");
});
