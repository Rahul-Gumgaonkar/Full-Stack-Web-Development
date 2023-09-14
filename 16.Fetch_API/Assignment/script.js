async function fetchAPI() {
  const response = await fetch("https://dummyjson.com/quotes");

  const JsonData = await response.json();

  fetchData(JsonData);
}

let counter = 0;
function fetchData(JsonData) {
  const Author = document.getElementById("author");
  const Text = document.getElementById("text");

  if (counter < 30) {
    Author.innerHTML = JsonData.quotes[counter].author;
    Text.innerHTML = JsonData.quotes[counter].quote;
  }
  counter++;
  if (counter == 30) {
    counter = 0;
  }
}

const Button = document.getElementById("button");
Button.addEventListener("click", fetchAPI);

fetchAPI();
