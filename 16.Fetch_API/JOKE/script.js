async function fetchAPI() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/slack", {});

    const jsonData = await response.json();
    fetchData(jsonData);
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}

function fetchData(JsonData) {
  const Text = document.getElementById("text");
  Text.innerHTML = JsonData.attachments[0].text;
}

const Button = document.getElementById("button");

Button.addEventListener("click", fetchAPI);

fetchAPI();
