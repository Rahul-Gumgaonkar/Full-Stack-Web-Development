// const a = 10;

// if (a > 18) {
//   console.log("You can drive");
// } else {
//   console.log("You cannot drive");
// }

// let a = Number(prompt("Enter first no. : "));
// let b = Number(prompt("Enter second no.: "));

// alert(`sum of ${a} and ${b} is ${a + b}`);
// console.log(`sum of ${a} and ${b} is ${a + b}`);

// alert("sum of " + a + " +" + b + "is" + (a + b));
// alert("sub of " + a + " -" + b + "is" + (a - b));
// alert("multiplication of " + a + " *" + b + "is" + a * b);
// alert("division of " + a + "/" + b + "is" + a / b);
// alert("power of " + a + " **" + b + "is" + a ** b);
// alert("average of " + a + "and" + b + "is :" + (a + b) / 2);

// console.log("sum of " + a + " +" + b + "is" + (a + b));
// console.log("sub of " + a + " -" + b + "is" + (a - b));
// console.log("multiplication of " + a + " *" + b + "is" + a * b);
// console.log("division of " + a + " /" + b + "is" + a / b);
// console.log("power of " + a + " **" + b + "is" + a ** b);
// console.log("average of " + a + "and" + b + "is :", (a + b) / 2);

let marks = Number(prompt("ente the Marks: "));

switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("Grade A++");
    break;

  case marks >= 80 && marks <= 89:
    console.log("Grade A");
    break;

  case marks >= 70 && marks <= 79:
    console.log("Grade B++");
    break;

  case marks >= 60 && marks <= 69:
    console.log("Grade B");
    break;

  case marks >= 50 && marks <= 59:
    console.log("Grade C++");
    break;

  case marks >= 40 && marks <= 49:
    console.log("Grade C");
    break;

  default:
    console.log("Fail");
    break;
}
