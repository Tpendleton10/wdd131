document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

const menuButton = document.getElementById("menuButton");
const navList = document.querySelector("nav ul");


menuButton.addEventListener("click", () => {
  navList.classList.toggle("show");
  menuButton.textContent = navList.classList.contains("show") ? "X" : "☰";
});