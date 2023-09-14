const box = document.getElementById("box");
console.log(box);

let count = 0;
const logMessage = () => {
  console.log("clicked", count++);
};

// function logMessage() {
//   console.log("clicked", count++);
// }

logMessage();

box.addEventListener("click", logMessage);

const Box1 = document.getElementById("box");

box.addEventListener("click", () => {
  console.log("Clicked the box");
});

const coordinates = document.createElement("p");
document.body.append(coordinates);

const Event = (event) => {
  //   console.log(event);
  coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
};

box.addEventListener("click", Event);
