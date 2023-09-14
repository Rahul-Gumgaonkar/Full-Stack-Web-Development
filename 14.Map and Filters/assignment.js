const arr = ["rahul", "lool", "om", "hi", "suresh", "yash", "pranav"];

const IsLessthan3 = arr.filter((ele) => {
  return ele.length < 3;
});

console.log(IsLessthan3);

const isFind = arr.find((ele) => {
  return ele.includes("hi");
});

console.log(isFind);

const checkPalindrome = (element) => {
  let str = "";
  for (let i = element.length - 1; i >= 0; i--) {
    str = str + element[i];
    // console.log(str)
  }

  if (str == element) return true;
  else return false;
};

const Ispalindrome = arr.filter(checkPalindrome);

console.log(Ispalindrome);

// question no 2
const array = [2, 3, 4, 5, 6, 7, 8, 9];
const square = array.map((element) => {
  return element * element;
});

console.log(square);

const Modify = array.map((num) => {
  return String(num);
});
console.log(Modify);

// question no. 3
let users = [
  {
    firstName: "Susan",
    lastName: "Singh",
  },
  {
    firstName: "Samshad",
    lastName: "Ali",
  },
  {
    firstName: "Vikas",
    lastName: "Pandit",
  },
  {
    firstName: "Sam",
    lastName: "Seikh",
  },
];

const firstNameFilter = users.filter((users) => {
  return users.firstName.includes("Susan");
});

console.log(firstNameFilter);

const lastnameFiltering = users.filter((element) => {
  if (element.lastName.charAt(0).includes("A")) return true;
});

console.log(lastnameFiltering);

var fullName = [];

const fullNameRetuns = users.map((element) => {
  if (element.firstName.includes("Sam") && element.lastName.includes("Seikh")) {
    fullName.push(element.firstName, element.lastName);
    console.log(fullName);
  }
});
