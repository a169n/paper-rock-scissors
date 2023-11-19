const playerBtns = document.querySelectorAll(".btn");

playerBtns.forEach((btn) => {
     btn.addEventListener("click", () => {
          let compChoiceBtn = playerBtns[Math.floor(Math.random() * 3)];

          let compDisplay = document.querySelector("#comp");
          let compResult = compChoiceBtn.getAttribute("data-value");
          compDisplay.textContent = compResult;

          let playerChoice = document.querySelector("#player");
          playerChoiceResult = btn.getAttribute("data-value");
          playerChoice.textContent = playerChoiceResult;

          let resultEl = document.querySelector("#result")

          if ((compResult === "Paper 📃" && playerChoiceResult === "Rock 🗿") ||
               (compResult === "Rock 🗿" && playerChoiceResult === "Scissors ✂️") ||
               (compResult === "Scissors ✂️" && playerChoiceResult === "Paper 📃")) {
               resultEl.textContent = "Computer wins! Loser XD"
          } else if (compResult === playerChoiceResult) {
               resultEl.textContent = "Draw!"
          } else {
               resultEl.textContent = "Lucky!"
          }

          const restartBtn = document.querySelector("#restart")
          restartBtn.addEventListener("click", () => {
               compDisplay.textContent = "";
               playerChoice.textContent = "";
               resultEl.textContent = "";
          })
     })
});