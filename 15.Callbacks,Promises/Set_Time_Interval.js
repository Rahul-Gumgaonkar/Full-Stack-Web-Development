// console.log("this is before Set time");
// setTimeout(() => {
//   console.log("this is set time ");
// }, 2000);
// console.log("this is after set time");

// function greet(name) {
//   console.log("hello ", name);
// }
// console.log("before greet");
// setTimeout(greet, 2000, "rahul");
// console.log("this is written after greet");

// const timeout = setTimeout(() => {
//   greet("rahul");
// }, 2000);

// clearTimeout(timeout);

let count = 1;
const timeInterval = setInterval(() => {
  console.log(count);
  const date = new Date().toTimeString();
  console.log(date);
  count++;
  if (count == 5) {
    clearInterval(timeInterval);
  }
}, 1000);

// clearInterval(timeInterval);

// let i = 0;
// setInterval(() => {
//   console.log("Hello Rahul", i);
//   i++;
// }, 2000);
