async function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cheese");
    }, 1000);
  });
}

async function getDough(Cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${Cheese}dough`);
    }, 1000);
  });
}

async function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${dough} pizza`);
    }, 1000);
  });
}
async function orderAPizza() {
  try {
    const Cheese = await getCheese();
    console.log("now we have ", Cheese);

    const dough = await getDough(Cheese);
    console.log("now we have", dough);

    const pizza = await makePizza(dough);
    console.log("now we have ", pizza);
    return pizza;
  } catch (e) {
    console.log(e);
  }
}
orderAPizza().then((pizza) => {
  console.log(pizza);
});
