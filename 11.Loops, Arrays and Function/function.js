function greating(name) {
  console.log("hello", name);
  console.log("namaste", name);
  console.log("hi", name);
}

// greating("rahul");
// greating("yash");

const greetvalue = greating("rahul");
console.log(greetvalue);

let result = addition(5, 3);
console.log(result);

function addition(a, b) {
  console.log("starting");
  return a + b;
}

// let myAddition = function (a, b) {
//   return a + b;
// };

let myAddition = (a, b) => {
  return a + b;
};
console.log(myAddition(4, 6));

console.log(typeof myAddition);

function train(name) {
  console.log("This is a train", name);
}

train("rajdhani express");

const mult = function (a, b) {
  return a * b;
};
let ans = mult(3, 4);
console.log(ans);
console.log(mult);

// const add = (a, b) => {
//   return a + b;
// };
// const result = add(4, 5);
// console.log(result);

function hello(name) {
  console.log("Hello", name);
}
hello("rahul");
hello("Yash");

// function add(a, b) {
//   return a + b;
// }

// let result = add(4, 5);
// console.log(result);

// const a = function (c, d) {
//   return c + d;
// };

const a = (c, d) => {
  return c + d;
};
console.log(a(3, 4));
