const person = {
    name: 'rahul',
    age : 19,
    college: "ycce",
    hobbies : ['codding',"eating"],
    foods:{
        sunday: 'pizza',
        monday:'burger'

    }
}

person.isHuman = true;

// console.log(person);
// console.log(person.name);
// console.log(typeof person);
// console.log(person["college"]);
// console.log(person["foods"]);

// for (let key in person){
//     console.log(key);
//     console.log(person[key]);
// }
    

function getvehicle(){
   return{
    type:'car',
    wheels: 4,
   }
}


//  const myVehicle1 = getvehicle();
//  console.log(myVehicle1);

//  const myVehicle2 = getvehicle()
//  myVehicle2.wheels=3;

// console.log(myVehicle2);

// console.log(person);
// const {age: myAge , name: Myname, isHuman} = person;
// console.log(myAge);

// console.log(person);

// person.walk = function(){
//     console.log("person is walking");
// }
// person.walk();

// talking(()=>{
//     console.log("I am shouting");
// })

// function talking (shouting){
//     console.log("I am talking");
//     shouting();
// }



// const student = {
//     name : "rahul",
//     marks : 87,
//     talk : function(){
//         console.log("my name is "+ this.name+  `and marks are ${this.marks}`);
//     }
// }

// student.talk();


class Vehicle {
    constructor(model,wheels){
        this.model= model,
        this.wheels= wheels;
    }
    start (){
        console.log("vehicle starting");
    }
}

const obj1 = new Vehicle("sedan",6);
const obj2 = new Vehicle("Hatchback",4);
console.log(obj1);
console.log(typeof obj1);
console.log(obj2);
obj1.start();