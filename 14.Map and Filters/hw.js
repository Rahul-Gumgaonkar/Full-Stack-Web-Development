const name = ["rahul", "om", "Vivek", "Ved", "Himanshu"];

// function IsLessthan3(name) {
//   return name.length < 4;
// }

// const ans = name.filter(IsLessthan3);
// console.log(ans);

// console.log(
//   name.filter((ele) => {
//     return ele.length < 4;
//   })
// );

const IsLessthan3 = name.filter((element) => {
  return element.length < 4;
});

console.log(IsLessthan3);

const FindExp = name.filter((ele) => {
  return ele.includes("om");
});

console.log(FindExp);

const findPalindrome = name.filter((element) => {
  let str = "";
  for (let i = element.length - 1; i >= 0; i--) {
    str = str + element[i];
    // console.log(str)
  }

  if (str == element) return true;
  else return false;
});

console.log(findPalindrome);

const arr = [1, 2, 3, 4, 5, 6];

const modify = arr.map((ele) => {
  return ele * ele;
});

console.log(modify);

const ConvertToString = arr.map((ele) => {
  return String(ele);
});

console.log(ConvertToString);

let users = [
  {
    firstName: "Susan",
    lastName: "Steward",
  },
  {
    firstName: "Daniel",
    lastName: "Longbottom",
  },
  {
    firstName: "Jacob",
    lastName: "Black",
  },
];

const find = users.filter((ele) => {
  return ele.firstName.includes("Susan");
});

console.log(find);

const FindLastName = users.filter((ele) => {
  return ele.lastName.startsWith("L");
});

console.log(FindLastName);

const fullName = users.map((ele) => {
  if (ele.firstName == "Susan" && ele.lastName == "Steward") {
    const ans = ele.firstName + ele.lastName;
    return ans;
  }
});

console.log(fullName[0]);
