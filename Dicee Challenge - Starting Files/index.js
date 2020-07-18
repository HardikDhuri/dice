var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelector(".img1");

var image2 = document.querySelector(".img2");

img1random = "images/dice" + randomNumber1 + ".png";
img2random = "images/dice" + randomNumber2 + ".png";

image1.setAttribute("src",img1random);
image2.setAttribute("src",img2random);

var heading =  document.querySelector(".title");

if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins!";
} else if (randomNumber2 < randomNumber1) {
    heading.textContent = "Player 1 Wins!";
} else {
    heading.textContent = "Draw!";
}

