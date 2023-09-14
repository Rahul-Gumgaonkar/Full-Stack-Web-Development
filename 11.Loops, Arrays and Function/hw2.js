// let name = ["rahul", "suresh", "yash", "ishant", "prathemesh", "pranav"];

// function alpha(name) {
//   name.sort();
//   return name;
// }
// console.log(name);
// console.log(alpha(name));

const name = [
  "rahul",
  "suresh",
  "yash",
  "satyam",
  "ramna",
  "sonali",
  "himanshu",
  "aman",
];

name.sort();
console.log(name);
const order = (element) => {
  let result = element.sort();
  return result;
};

const ans = order(name);
console.log(ans);

const num = [1, 56, 43, 87, 12, 34, 2, 3];

num.sort((p, q) => {
  return p - q;
});

console.log(num);
