const Images = [
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const n = Images.length;
const flexContainer = document.getElementById("flex-container");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const carousalNav = document.getElementById("carousal-nav");

const containerWidth = 50;
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = flexContainerWidth;

for (let i = 0; i < n; i++) {
  const newImg = document.createElement("img");
  newImg.src = Images[i];
  newImg.classList.add("img-style");
  flexContainer.appendChild(newImg);

  const carousalDiv = document.createElement("div");
  carousalDiv.classList.add("carousal-dot");
  carousalNav.appendChild(carousalDiv);
  carousalDiv.addEventListener("click", (event) => {
    const index = [...carousalNav.children].indexOf(event.target);
    showImg(index);
  });
}

let currentPosition = 0;

setInterval(() => {
  if (currentPosition < n) {
    showImg(currentPosition + 1);
  } else {
    currentPosition = 0;
  }
}, 2000);

leftBtn.addEventListener("click", () => {
  if (currentPosition > 0) {
    showImg(currentPosition - 1);
  } else {
    showImg(n - 1);
  }
});

rightBtn.addEventListener("click", () => {
  if (currentPosition < n - 1) {
    showImg(currentPosition + 1);
  } else {
    showImg(0);
  }
});

function showImg(position) {
  const prevDot = carousalNav.children[currentPosition];
  prevDot.classList.remove("active");
  currentPosition = position;

  const currDot = carousalNav.children[currentPosition];
  currDot.classList.add("active");

  const translateXDirection = -currentPosition * containerWidth;
  flexContainer.style.transform = `translateX(${translateXDirection}vw)`;
}
