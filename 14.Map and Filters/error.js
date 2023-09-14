try {
  console.log(x);
  console.log("Here is no Error");
} catch (error) {
  console.log(error);
  console.log("Error Occur");
} finally {
  console.log("this will always executed");
}

import { addition as add, subtraction } from "./moduls.js";

const a = 9;
const b = 5;
const result = subtraction(a, b);
console.log(result);

const ans = add(a, b);
console.log(ans);

import multiplication from "./moduls.js";
// const result1 = multiplication(a,b)
console.log(multiplication(a, b));
