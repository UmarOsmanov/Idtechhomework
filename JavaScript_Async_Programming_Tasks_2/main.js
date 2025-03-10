let countdown;
let timeLeft = 10;
let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("startButton");


startButton.addEventListener("click", startTimer);



function startTimer() {
  timeLeft = 10;
  updateTimerDisplay();

  countdown = setInterval(function () {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 3) {
      timerDisplay.classList.add("warning");
    } else {
      timerDisplay.classList.remove("warning");
    }

    if (timeLeft === 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
}





function updateTimerDisplay() {
  timerDisplay.textContent = timeLeft;
}




function resetTimer() {
  clearInterval(countdown);
  timeLeft = 10;
  updateTimerDisplay();
}
