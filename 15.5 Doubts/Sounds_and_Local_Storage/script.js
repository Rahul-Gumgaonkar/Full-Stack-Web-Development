const eassyInput = document.getElementById("essay");

eassyInput.addEventListener("change", () => {
  localStorage.setItem("key_essay", eassyInput.value);
});

window.addEventListener("load", () => {
  const eassyInput = document.getElementById("essay");
  eassyInput.value = localStorage.getItem("key_essay");
});
