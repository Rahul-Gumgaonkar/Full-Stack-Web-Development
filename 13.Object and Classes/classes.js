class Vehicle {
  constructor(model, wheels) {
    this.model = model;
    this.wheels = wheels;
  }

  start() {
    console.log("start the vehicle");
  }
}

const obj1 = new Vehicle("sedan", 6);
const obj2 = new Vehicle("hatchbak", 4);
console.log(obj1);
console.log(obj2);

obj1.start();

console.log(typeof obj1);
console.log(typeof Vehicle);

const JasonString = `{   
    "name":"rahul",
    "age":"34"
}`;

console.log(JasonString);
// convert jason string to jason object
const JasonObject = JSON.parse(JasonString);
console.log(JasonObject);

// convert String to jason object
const backToString = JSON.stringify(JasonObject);
console.log(backToString);

const student = {
  name: "Rahul",
  marks: 89,
  talk: function () {
    console.log(`my name is : ${this.name} and marks are ${this.marks}`);
    console.log(`my marks are :`, this.marks);
  },
};

student.talk();

const age = 45;
// const message = "my age is "+age;

// const message = `my age is : `+age;
const message = `my age is :${age} `;
console.log(message);
