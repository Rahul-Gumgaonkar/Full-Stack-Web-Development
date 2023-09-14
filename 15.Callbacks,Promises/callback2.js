const orderPizza = (callback) => {
  makePizza((pizza) => {
    callback(pizza);
  });
};

function makePizza(callback) {
  makeDough((dough) => {
    setTimeout(() => {
      const pizza = "🍕";
      console.log("baked the pizza" + dough, pizza);
      callback(pizza);
    });
  });
}

function makeDough(callback) {
  makecheese((cheese) => {
    setTimeout(() => {
      const dough = "🍩" + cheese;
      console.log("baked the dough", dough);
      callback(dough);
    });
  });
}
function makecheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("baked the cheese", cheese);
    callback(cheese);
  });
}

function Notify(pizza) {
  console.log("here is my notification for", pizza);
}

orderPizza(Notify);
