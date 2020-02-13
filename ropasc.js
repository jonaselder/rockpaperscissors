function computerPlay (){
    let computerChoose = ["rock", "paper", "scissors"];
    let computerPlay = computerChoose[Math.floor((Math.random() * 3))];
    return computerPlay
}

function gamePlay (){
    let playerGo = prompt("Rock, Paper, or Scissors?");
    let computerGo = computerPlay();
if (playerGo.toLowerCase() == computerGo){
    return "Tie Game";
}
else if (playerGo.toLowerCase() == "rock" && computerGo == "scissors" ||
         playerGo.toLowerCase() == "paper" && computerGo == "rock" ||
         playerGo.toLowerCase() == "scissors" && computerGo == "paper"){
    return "You Win!";
}
else if (playerGo.toLowerCase() != "rock" || "paper" || "scissors"){
    return "Incorrect input. Please type Rock, Paper, or Scissors"
}
else {
    return "You Lost.";
}
}
