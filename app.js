let correctNumber = getRandomNumber();
let guesses = [];
console.log(correctNumber);
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};
function playGame() {
  // functionality for playign the whole game
  let numberGuessed = document.getElementById("number-guessed").value;
  displayResult(numberGuessed);
  saveGuessHistory(numberGuessed);
  displayHistory();
}
// Get a random number
function getRandomNumber() {
  // Return a random number between 1-100
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

// Display result function
function displayResult(numberGuessed) {
  let text = "";
  if (numberGuessed > correctNumber) {
    showNumberAbove();
  } else if (numberGuessed < correctNumber) {
    showNumberBelow();
  } else {
    showYouwon();
  }
}

// Retrieve the dialog based on if the guess is wrong or correct
function getDailog(dialogTytpe, text) {
  let dialog;
  switch (dialogTytpe) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}
// Show You Won
function showYouwon() {
  const text = "Awesome job, You got it!";

  let dialog = getDailog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

// Show Number Above
function showNumberAbove() {
  const text = "Your guess is too high!";

  let dialog = getDailog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

// Show Number Below

function showNumberBelow() {
  const text = "Your guess is too low";
  let dialog = getDailog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

// Save guess history
function saveGuessHistory(guess) {
  guesses.push(guess);
}

// Display guess history to user

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" + "You gurss " + guesses[index] + "</li>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

// Reset the Game
function initGame() {
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}
