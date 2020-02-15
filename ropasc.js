function computerGo(){
    let computerChoose = ["rock", "paper", "scissors"];
    let computerPlay = computerChoose[Math.floor((Math.random() * 3))];
    return computerPlay
}

function playerGo(){
    let playerChoose = prompt("Enter Rock, Paper, or Scissors to play.");
    while (playerChoose === null){
        alert("Please make a valid entry. Rock, paper, or scissors.");
        playerChoose = prompt("Enter Rock, paper, or scissors.");
    }
    playerChoose = playerChoose.toLowerCase();
    if (playerChoose == "rock" || playerChoose == "paper" || playerChoose == "scissors"){
        alert("good choice")
        playerPlay = playerChoose;
        return playerPlay;
    }
    else{
        do{
            playerChoose = prompt("Enter a valid selection. Rock, paper, or scissors");
            while (playerChoose === null){
                alert("Please make a valid selection.");
                playerChoose = prompt("Enter rock, paper, or scissors");
            }
            playerChoose.toLowerCase();
        }
        while (playerChoose != "rock" && playerChoose != "paper" && playerChoose != "scissors")
    }
    playerPlay = playerChoose;
    return playerPlay;
}
