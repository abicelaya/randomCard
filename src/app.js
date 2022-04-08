import "./style.css";

window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"];
  let randomNumber = Math.floor(Math.random() * 12);

  let randomPalo = palos[randomNumber % 4];

  let spanTop = document.getElementsByClassName("top-palo");

  spanTop[0].innerHTML = randomPalo;

  let spanNumber = document.getElementsByClassName("number");

  spanNumber[0].innerHTML = randomNumber;

  let spanBottom = document.getElementsByClassName("bottom-palo");
  spanBottom[0].innerHTML = randomPalo;
};
