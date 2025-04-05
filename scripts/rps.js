document.addEventListener("DOMContentLoaded", () => {
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const playerChoice = document.getElementById("player-choice");
  const computerChoice = document.getElementById("computer-choice");
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  const result = document.getElementById("result");
  const status = document.getElementById("status");
  const gameOver = document.getElementById("game-over");
  const resultEmoji = document.getElementById("result-emoji");
  const winnerText = document.getElementById("winner-text");
  const playAgainBtn = document.getElementById("play-again");
  const infoBtn = document.getElementById("info-btn");
  const infoModal = document.getElementById("info-modal");
  const closeInfoBtn = document.getElementById("close-info");
  const soundToggle = document.getElementById("sound-toggle");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const selectionSound = document.getElementById("selection-sound");
  const winSound = document.getElementById("win-sound");
  const loseSound = document.getElementById("lose-sound");
  const gameWinSound = document.getElementById("game-win-sound");
  const gameLoseSound = document.getElementById("game-lose-sound");

  let playerScore = 0;
  let computerScore = 0;
  const MAX_SCORE = 5;
  let soundEnabled = true;
  let darkModeEnabled = false;
  let isProcessing = false;
  const choices = ["rock", "paper", "scissors"];
  const choiceEmojis = { rock: "👊", paper: "✋", scissors: "✌️" };

  // Check for dark mode preference in localStorage
  if (localStorage.getItem("darkMode") === "true") {
    enableDarkMode();
  }

  // Info modal controls
  infoBtn.addEventListener("click", () => infoModal.classList.remove("hidden"));
  closeInfoBtn.addEventListener("click", () =>
    infoModal.classList.add("hidden")
  );
  infoModal.addEventListener("click", (e) => {
    if (e.target === infoModal) infoModal.classList.add("hidden");
  });

  // Sound toggle
  soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggle.innerHTML = soundEnabled
      ? `<svg class="icon" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> Sound: On`
      : `<svg class="icon" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg> Sound: Off`;
  });

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
    if (darkModeEnabled) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    darkModeEnabled = true;
    darkModeToggle.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg> Dark Mode`;
    localStorage.setItem("darkMode", "true");
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    darkModeEnabled = false;
    darkModeToggle.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg> Light Mode`;
    localStorage.setItem("darkMode", "false");
  }

  function playSound(sound) {
    if (soundEnabled)
      (sound.currentTime = 0),
        sound.play().catch((e) => console.log("Audio error:", e));
  }

  function disableButtons() {
    choiceButtons.forEach((btn) => (btn.disabled = true));
    infoBtn.disabled = true;
    soundToggle.disabled = true;
  }

  function enableButtons() {
    choiceButtons.forEach((btn) => (btn.disabled = false));
    infoBtn.disabled = false;
    soundToggle.disabled = false;
  }

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (isProcessing) return;
      isProcessing = true;

      // Disable all buttons during processing
      disableButtons();

      const playerSel = button.dataset.choice;
      playSound(selectionSound);

      playerChoice.textContent = choiceEmojis[playerSel];
      playerChoice.classList.add("animate");
      setTimeout(() => playerChoice.classList.remove("animate"), 500);
      status.textContent = "Waiting for result...";

      setTimeout(() => {
        const compSel = choices[Math.floor(Math.random() * choices.length)];
        const resultType =
          playerSel === compSel
            ? "tie"
            : (playerSel === "rock" && compSel === "scissors") ||
              (playerSel === "paper" && compSel === "rock") ||
              (playerSel === "scissors" && compSel === "paper")
            ? "win"
            : "lose";
        handleGameResult({
          player_choice: playerSel,
          computer_choice: compSel,
          result: resultType,
        });
      }, 500);
    });
  });

  function handleGameResult(response) {
    computerChoice.textContent = choiceEmojis[response.computer_choice];
    computerChoice.classList.add("animate");
    setTimeout(() => computerChoice.classList.remove("animate"), 500);

    if (response.result === "tie") {
      result.textContent = "It's a tie!";
      result.className = "result tie";
    } else if (response.result === "win") {
      playerScore++;
      playerScoreElement.textContent = playerScore;
      result.textContent = "You win this round!";
      result.className = "result winner";
      playSound(winSound);
    } else {
      computerScore++;
      computerScoreElement.textContent = computerScore;
      result.textContent = "Computer wins this round!";
      result.className = "result loser";
      playSound(loseSound);
    }

    if (playerScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
      const winner = playerScore >= MAX_SCORE ? "You" : "Computer";
      endGame(winner);
    } else {
      // Re-enable buttons after result is shown
      setTimeout(() => {
        isProcessing = false;
        enableButtons();
        status.textContent = "Choose your weapon!";
      }, 1000);
    }
  }

  function endGame(winner) {
    // Keep buttons disabled for the game over screen
    disableButtons();

    // Set game over screen content
    if (winner === "You") {
      resultEmoji.textContent = "🎉";
      winnerText.textContent = "Congratulations! You Win!";
      gameOver.classList.add("win-screen");
      playSound(gameWinSound);
    } else {
      resultEmoji.textContent = "😢";
      winnerText.textContent = "Oh no! Computer Wins!";
      gameOver.classList.add("lose-screen");
      playSound(gameLoseSound);
    }

    // Show the game over screen
    gameOver.classList.remove("hidden");
  }

  playAgainBtn.addEventListener("click", () => {
    // Reset game state
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = "0";
    computerScoreElement.textContent = "0";
    playerChoice.textContent = "?";
    computerChoice.textContent = "?";
    result.textContent = "";
    status.textContent = "Choose your weapon!";

    // Hide game over screen and remove win/lose classes
    gameOver.classList.add("hidden");
    gameOver.classList.remove("win-screen", "lose-screen");

    // Re-enable buttons
    isProcessing = false;
    enableButtons();
  });

  // Handle keyboard accessibility for game controls
  document.addEventListener("keydown", (e) => {
    if (isProcessing) return;

    switch (e.key.toLowerCase()) {
      case "r":
        document.querySelector('[data-choice="rock"]').click();
        break;
      case "p":
        document.querySelector('[data-choice="paper"]').click();
        break;
      case "s":
        document.querySelector('[data-choice="scissors"]').click();
        break;
      case " ":
        if (!gameOver.classList.contains("hidden")) {
          playAgainBtn.click();
        }
        break;
    }
  });

  // Prevent transitions during page load
  window.addEventListener("load", () => {
    document.body.classList.add("transitions-enabled");
  });
});
