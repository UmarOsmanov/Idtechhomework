let randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 3;

function checkGuess() {
  let guess = document.getElementById("guessInput").value;
  let message = document.getElementById("message");
  let chanceDisplay = document.getElementById("chances");

  if (guess === "" || isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Zəhmət olmasa 1-100 arası ədəd daxil edin.";
    return;
  }

  guess = Number(guess);
  chances--;

  if (guess === randomNumber) {
    message.textContent = "Təbriklər! Qalib oldun!";
    message.style.color = "green";
    document.getElementById("guessInput").disabled = true;
  } else if (chances > 0) {
    message.textContent =
      guess < randomNumber
        ? "Daha böyük ədəd daxil edin!"
        : "Daha kiçik ədəd daxil edin!";
    message.style.color = "yellow";
  } else {
    message.textContent = "Məğlub oldun! Doğru cavab: " + randomNumber;
    message.style.color = "red";
    document.getElementById("guessInput").disabled = true;
  }

  chanceDisplay.textContent = chances;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Yeni təsadüfi ədəd yaradılır
  chances = 3; // Şans sıfırlanır
  document.getElementById("message").textContent = ""; // Mesaj təmizlənir
  document.getElementById("chances").textContent = chances; // Şans yenilənir
  document.getElementById("guessInput").value = ""; // Input sahəsi sıfırlanır
  document.getElementById("guessInput").disabled = false; // Input aktiv edilir
}
