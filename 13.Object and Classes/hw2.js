class Vehicle {
  constructor(name, age, isDesel, wheels) {
    this.name = name;
    this.age = age;
    this.isDesel = isDesel;
    this.wheels = wheels;
  }

  drive() {
    if (this.age > 18) {
      console.log("You can drive");
    } else {
      console.log("You can not drive");
    }
  }

  break() {
    console.log("If signal is Red Break the car");
  }
}

const car1 = new Vehicle("Rahul", 20, true, 4);
const car2 = new Vehicle("Yash", 17, false, 2);

console.log(car1);
console.log(car2);

for (const key in car1) {
  console.log(`${key} => ${car1[key]}`);
}

for (const key in car2) {
  console.log(car2[key]);
}

car1.drive();
car2.drive();

car1.break();
car2.break();

const car3 = {
  name: "BMW",
  price: 100000000,
};

const convertToOnject = JSON.stringify(car1);

console.log(convertToOnject);
