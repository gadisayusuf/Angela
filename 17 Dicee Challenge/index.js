var option = Math.floor(Math.random() * 6) + 1;
var option2 = Math.floor(Math.random() * 6) + 1;
if (option < option2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else if (option > option2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
document.querySelector(".img1").setAttribute("src", "images/dice" + option + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + option2 + ".png");