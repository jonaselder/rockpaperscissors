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

function roundPlay(playerSelection, computerSelection){
    playerSelection = playerGo();
    computerSelection = computerGo();
    if (playerSelection == computerSelection){
        alert("Tie game.")
        return 2
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || 
             playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper"){
                 alert("You win!")
        return 1
             }
    else {
        alert("You lost.")
        return 0
    }
}

function game(){
    let win = 0;
    let loss = 0;
    let tie = 0;
    for (i = 0; i < 5; i++){
    let lwt = ["loss", "win", "tie"];
   outcome = lwt[roundPlay()];
   if(outcome == "win"){
       win = ++win;
   }
   else if (outcome == "loss"){
       loss = ++loss;
   }
   else{
       tie = ++tie;
   }
   }
   console.log("You won " + win + " games, lost " + loss + " games, and tied " + tie + " times.")
   if ( win > loss){
       console.log("You win the match!")
   }
   else if (win < loss){
       console.log("Sorry, you lost. It's hard to beat a computer.")
   }
   else{
       console.log("Tie match.")
   }
}
