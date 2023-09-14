async function fetchAPI() {
  try {
    const loadBox = document.getElementById("loading");
    const contentBox = document.getElementById("box");

    // loadBox.style.display = "block";
    // contentBox.style.display = "none";

    const fetchData = await fetch("https://dummyjson.com/products/1");
    console.log(fetchData);

    const jsonData = await fetchData.json();
    console.log(jsonData);

    // contentBox.style.display = "block";

    // loadBox.style.display = "none";

    loadData(jsonData);
  } catch (err) {
    console.log(err);
  }
}

function loadData(jsonData) {
  const phoneTextElement = document.getElementById("phone-title");
  const phoneTextDescription = document.getElementById("phone-description");
  const phoneTextImage = document.getElementById("phone-img");

  phoneTextElement.innerHTML = jsonData.title;
  phoneTextDescription.innerHTML = jsonData.description;
  phoneTextImage.src = jsonData.images[1];
}

fetchAPI();
