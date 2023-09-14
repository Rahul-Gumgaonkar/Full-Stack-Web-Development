function multiply(a, b) {
  return a * b;
}

function addition(a, b, c) {
  return a + b + c;
}

const log = {
  warning: (info) => {
    console.log("warning", info);
  },
  error: (info) => {
    console.log("error", info);
  },
};

exports.hello = "Hello , This is Rahul";

module.exports = { multiply, log, addition };
