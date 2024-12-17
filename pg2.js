const Chosices = ["Steen", "Papier", "Schaar"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");
const PlayerScoreDisplay = document.getElementById("PlayerScore");
const ComputerScoreDisplay = document.getElementById("ComputerScore");
const DrawScoreDisplay = document.getElementById("DrawScore"); 

let playerScore = 0; 
let computerScore = 0; 
let drawScore = 0; 

function PlayGame(PlayerChoices) {
    const ComputerChoices = Chosices[Math.floor(Math.random() * 3)];
    let Result = "";

    if (PlayerChoices === ComputerChoices) {
        Result = "Gelijkspel!";
        drawScore++; 
    } else {
        switch (PlayerChoices) {
            case "Steen":
                if (ComputerChoices === "Schaar") {
                    Result = "Je hebt GEWONNEN!!!!";
                    playerScore++; 
                } else {
                    Result = "Je hebt verloren";
                    computerScore++;
                }
                break;
            case "Papier":
                if (ComputerChoices === "Steen") {
                    Result = "Je hebt GEWONNEN!!!!";
                    playerScore++;
                } else {
                    Result = "Je hebt verloren";
                    computerScore++; 
                }
                break;
            case "Schaar":
                if (ComputerChoices === "Papier") {
                    Result = "Je hebt GEWONNEN!!!!";
                    playerScore++; 
                } else {
                    Result = "Je hebt verloren";
                    computerScore++; 
                }
                break;
        }
    }

    PlayerDisplay.textContent = `Speler: ${PlayerChoices}`;
    ComputerDisplay.textContent = `Computer: ${ComputerChoices}`;
    ResultDisplay.textContent = Result;

    PlayerScoreDisplay.textContent = `Score Speler: ${playerScore}`;
    ComputerScoreDisplay.textContent = `Score Computer: ${computerScore}`;
    DrawScoreDisplay.textContent = `Gelijkspel: ${drawScore}`;
}