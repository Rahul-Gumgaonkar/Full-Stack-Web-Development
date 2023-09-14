const container = document.getElementById("container");
const profileCard = document.getElementById("user-card-template");

async function fetchAPI() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  //   console.log(data);
  const users = await data.users;
  //   console.log(users);

  bindData(users);
}

function bindData(users) {
  users.forEach((user) => {
    const userCardClone = profileCard.content.cloneNode(true);
    const userImage = userCardClone.querySelector("#user-img");
    const userName = userCardClone.querySelector("#user-name");
    const userEmail = userCardClone.querySelector("#user-email");

    userImage.src = user.image;
    userName.innerHTML = `${user.firstName} ${user.lastName}`;
    userEmail.innerHTML = user.email;

    container.appendChild(userCardClone);
  });

  //   profileCard.style.display = "none";
}

fetchAPI();
