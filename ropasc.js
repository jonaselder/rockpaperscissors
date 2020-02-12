function computerPlay (){
    let computerChoose = ["Rock", "Paper", "Scissors"];
    let computerGo = computerChoose[Math.floor((Math.random() * 3))];
    return computerGo
}