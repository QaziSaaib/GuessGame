"use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".heading").textContent);

// document.querySelector(".message").textContent = "🎉 Correct number!";

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 13;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".quest-mark").textContent = 13;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".quest-mark").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".quest-mark").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      displayMessage("⛔ Game Over!");
      document.querySelector(".score").textContent = score;
    }
  }
});

// adding event listner to again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".quest-mark").textContent = secretNumber;
  displayMessage("Start guessing...");
  document.querySelector(".quest-mark").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".quest-mark").style.width = "15rem";
});
