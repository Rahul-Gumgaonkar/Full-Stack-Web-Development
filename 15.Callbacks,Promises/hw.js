function CardChekOut() {
  getOrderInfo()
    .then((order) => {
      checkIfAvailable(order);
    })
    .then((isPresent) => {
      placeOrder(isPresent);
    });
}

function getOrderInfo() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const order = "👕";
      console.log("Getting the Order Info", order);
      resolve(order);
    }, 2000);
  });
}

function checkIfAvailable(order) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const isPresent = "Available " + order;
      console.log("Your Order is ", isPresent);
      resolve(isPresent);
    }, 2000);
  });
}

function placeOrder(isPresent) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const Place = isPresent + "👕👕";
      console.log("Your Orderis Placed", Place);
      resolve(Place);
    }, 2000);
  });
}

CardChekOut();

// function getUserInfo(callBack) {
//   setTimeout(() => {
//     const Name = "Rahul";
//     console.log("Your Name is : ", Name);
//     callBack(Name);
//   }, 2000);
// }

// function checkIfAlreadyPresent(callBack) {
//   getUserInfo((Name) => {
//     setTimeout(() => {
//       const isAvailable = Name + " NOT Available";
//       console.log(isAvailable);
//       callBack(isAvailable);
//     }, 2000);
//   });
// }

// function createAccount(callBack) {
//   checkIfAlreadyPresent(() => {
//     setTimeout(() => {
//       console.log("Your Account is Created");
//       callBack();
//     }, 2000);
//   });
// }

// function signUpYourEmail(callBack) {
//   createAccount(() => {
//     setTimeout(() => {
//       const email = "abc.gmail.com";
//       console.log("Your email is : ", email);
//       callBack(email);
//     }, 2000);
//   });
// }

// function SiginUp(callBack) {
//   signUpYourEmail((email) => {
//     callBack(email);
//   });
// }

// function Notify(sucessful) {
//   console.log("LOGIN ", sucessful);
// }

// SiginUp(Notify);

// function getOrderInfo(next) {
//   setTimeout(() => {
//     const order = "👕";
//     console.log("Getting the Order Info", order);
//     next(order);
//   }, 2000);
// }

// function checkIfAvailable(order, next) {
//   setTimeout(() => {
//     const isPresent = "Available " + order;
//     console.log("Your Order is ", isPresent);
//     next(isPresent);
//   }, 2000);
// }

// function placeOrder(isPresent, next) {
//   setTimeout(() => {
//     const Place = isPresent + "👕👕";
//     console.log("Your Orderis Placed", Place);
//     next(Place);
//   }, 2000);
// }

// function ReturnSuccessfull(callBack) {
//   getOrderInfo((order) => {
//     checkIfAvailable(order, (isPresent) => {
//       placeOrder(isPresent, (Place) => {
//         callBack(Place);
//       });
//     });
//   });
// }

// ReturnSuccessfull();
