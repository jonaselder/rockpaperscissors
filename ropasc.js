function computerGo(){
    let computerChoose = ["rock", "paper", "scissors"];
    let computerPlay = computerChoose[Math.floor((Math.random() * 3))];
    return computerPlay
}

function playerGo(){
    let playerChoose = prompt("Enter Rock, Paper, or Scissors to play.");
    while (playerChoose === null || 
           playerChoose.toLowerCase() != "rock" && 
           playerChoose.toLowerCase() != "paper" && 
           playerChoose.toLowerCase() != "scissors"){
        alert("Please make a valid entry. Rock, paper, or scissors.");
        playerChoose = prompt("Enter Rock, paper, or scissors.");
    }
    if (playerChoose == "rock" || playerChoose == "paper" || playerChoose == "scissors"){
        alert("Good choice!")
    }
    playerPlay = playerChoose.toLowerCase();
        return playerPlay;
}
