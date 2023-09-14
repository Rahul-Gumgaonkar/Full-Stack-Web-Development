const orderPizza = (callback) => {
  getCheese((cheese) => {
    makeDough(cheese, (dough) => {
      bakePizza(dough, (pizza) => {
        callback(pizza);
      });
    });
  });
};

function getCheese(next) {
  setTimeout(() => {
    const cheese = "🧀 ";
    console.log("sending the ", cheese);
    next(cheese);
  }, 2000);
}
function makeDough(cheese, next) {
  setTimeout(() => {
    const dough = cheese + " 🍩";
    console.log("sending the ", dough);
    next(dough);
  }, 2000);
}
function bakePizza(dough, next) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log("sending the ", pizza);
    next(dough);
  }, 2000);
}

function Notify(pizza) {
  console.log("here is my notification for", pizza);
}

// const pizza = orderPizza((pizza) => {
//   console.log("here is my", pizza);
// });
// console.log(pizza);

orderPizza(Notify);
