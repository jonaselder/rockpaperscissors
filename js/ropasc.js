const startQuit = document.querySelector('#startQuit');
const startQuitText = document.querySelector('span');
const gameHead = document.querySelector('h1');
const buttons = document.querySelectorAll('.playerbuttons');
const start = document.querySelector('span.startbutton');
let eI = 0; //global event iteration variable
let gameNum = 0; 

startQuit.addEventListener('mouseenter', startQuitOn);
startQuit.addEventListener('mouseup', startQuitOn);

startQuit.addEventListener('mouseleave', startQuitOff);
startQuit.addEventListener('mousedown', startQuitOff);

startQuit.addEventListener('click', toggleGame);

document.addEventListener('transitionend', buttonSet);

function toggleGame(){
    switch (gameNum === 0){
        case (true):
            gameNum++;
            rock.classList.add('highlight');
            document.addEventListener('transitionend', buttonSet);
            startQuitText.textContent = 'End Game?';
            gameHead.textContent = `Game ${gameNum}`;
            buttons.forEach(item => item.addEventListener('mouseenter', highlightPlusOn));
            buttons.forEach(item => item.addEventListener('mouseleave', highlightPlusOff));
            buttons.forEach(item => item.addEventListener('mousedown', highlightPlusOff));
            buttons.forEach(item => item.addEventListener('mouseup', highlightPlusOn));
            buttons.forEach(item => item.addEventListener('click', playGame)); 
            break;
              
    
        case (false):
            startQuitText.textContent = 'Start Game!';
            gameHead.textContent = 'Game #';
            eI = 0;
            gameNum = 0;
            buttons.forEach(item => item.classList.remove('highlight'));
            break;

}}

function playGame(e){
    userChoice = e.target.id;
    compChoice = ['rock', 'paper', 'scissors'][Math.floor((Math.random() * 3))];
    console.log(userChoice);
    console.log(compChoice);
}

function buttonSet(e){
    console.log(eI);
    if (e.propertyName !== 'transform') return;
    console.log(e);
    switch (eI){
    case 0:
        rock.classList.remove('highlight');
        eI++;
        break;
    case 1:
        paper.classList.add('highlight');
        eI++;
        break;
    case 2:
        paper.classList.remove('highlight');
        eI++;
        break;
    case 3:
        scissors.classList.add('highlight');
        eI++;
        break;
    case 4:
        scissors.classList.remove('highlight');
        eI++;
        break;
    case 5:
        buttons.forEach(item => item.classList.add('highlight'));
        document.removeEventListener('transitionend', buttonSet);
        buttons.forEach(item => item.addEventListener('mouseenter', highlightPlusOn));
        buttons.forEach(item => item.addEventListener('mouseleave', highlightPlusOff));
        buttons.forEach(item => item.addEventListener('mousedown', highlightPlusOff));
        buttons.forEach(item => item.addEventListener('mouseup', highlightPlusOn));
        break;
    }
}



function buttonBlinkOn(e){
    if (e.propertyName !== 'transform') return;
    this.classList.add('highlight');
    //this.addEventListener('transitionend', buttonBlinkOff);
    console.log(e);
    console.log(this);
}

function buttonBlinkOff(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('highlight');
    console.log(e);
    console.log(this);
}

function startQuitOn(e){
    this.classList.add('startquithover');
   // console.log(e);
}

function startQuitOff(e){
    this.classList.remove('startquithover');
   // console.log(e);
}

function highlightPlusOn(e){
    if(e.target.id === 'rock') rock.classList.add('highlightplus');
    else if(e.target.id ==='paper') paper.classList.add('highlightplus');
    else scissors.classList.add('highlightplus');
    console.log(e);
}

function highlightPlusOff(e){
    
    if(e.target.id === 'rock') rock.classList.remove('highlightplus');
    else if(e.target.id ==='paper') paper.classList.remove('highlightplus');
    else scissors.classList.remove('highlightplus');
    console.log(e);  
}



/* 

first draft:

const playRndWin = document.querySelector('#playRndWin');
const compRndWin = document.querySelector('#compRndWin');
const startQuit = document.querySelector('#startQuit');
const buttons = document.querySelectorAll('.playerbuttons');
const start = document.querySelector('span.startbutton');

startQuit.addEventListener('mouseenter', () => startQuit.classList.add('startquithover'));

startQuit.addEventListener('mouseleave', () => startQuit.classList.remove('startquithover'));

startQuit.addEventListener('mousedown', () => startQuit.classList.remove('startquithover'));

startQuit.addEventListener('mouseup', () => startQuit.classList.add('startquithover'));

startQuit.addEventListener('click', function startGame(){
    rock.classList.add('highlight');
        rock.addEventListener('transitionend', function rockTrans(e){
            if(e.propertyName !== 'transform') return;
            rock.classList.remove('highlight');
            paper.classList.add('highlight');
            rock.removeEventListener('transitionend', rockTrans);
    });
                paper.addEventListener('transitionend', function paperTrans(e){
                if(e.propertyName !== 'transform') return;
                paper.classList.remove('highlight');
                scissors.classList.add('highlight');
                paper.removeEventListener('transitionend',paperTrans);
        });
                    scissors.addEventListener('transitionend', function scissorsTrans(e){
                    if(e.propertyName !== 'transform') return;
                    scissors.classList.remove('highlight');
                    scissors.removeEventListener('transitionend', scissorsTrans);
                    playSet();
                    //game();
                    roundPlay();
                    //play();         
        });                       
},{once:true});




const playSet = function (){
    
    let quit = document.querySelector('span');
    let gameNum = document.querySelector('h1');
    gameNum.textContent = 'Game 1'
    quit.textContent = 'End Game';
    startQuit.removeChild(start);
    startQuit.appendChild(quit);
    scissors.addEventListener('transitionend', () => {buttons.forEach(item => item.classList.add('highlight'))}, 
    {once: true});
        buttons.forEach(item => {item.addEventListener('mouseenter', function(e){
            if(e.target.id === 'rock') rock.classList.add('highlightplus');
            else if (e.target.id === 'paper') paper.classList.add('highlightplus');
            else scissors.classList.add('highlightplus');

        })
    });
        buttons.forEach(item => item.addEventListener('mouseleave', function(e){
            if(e.target.id === 'rock') rock.classList.remove('highlightplus');
            else if (e.target.id === 'paper') paper.classList.remove('highlightplus');
            else scissors.classList.remove('highlightplus');
        })
        );
        buttons.forEach(item => item.addEventListener('mousedown', function(e){
            if(e.target.id === 'rock') rock.classList.remove('highlightplus', 'highlight');
            else if (e.target.id === 'paper') paper.classList.remove('highlightplus', 'highlight');
            else scissors.classList.remove('highlightplus', 'highlight');
        })
        );
        buttons.forEach(item => item.addEventListener('mouseup', function(e){
            if(e.target.id === 'rock') rock.classList.add('highlight');
            else if (e.target.id === 'paper') paper.classList.add('highlight');
            else scissors.classList.add('highlight');
        })
        );

}

function computerPlay(){
    return ["rock", "paper", "scissors"][Math.floor((Math.random() * 3))];    
}

function playerGo(e){
    userChoice = e.target.id;
    alert(userChoice);    
    alert ("Bold move Cotton");
    return userChoice;        
}
function roundPlay(pwin, cwin, tiegame){
    const playerWin = document.querySelector('#playerWin');
    const tie = document.querySelector('#tie');
    const compWin = document.querySelector('#compWin');
    cwin= 0;
    pwin = 0;
    tiegame = 0;
    buttons.forEach(item => item.addEventListener('click', function(e){
    playerSelect = playerGo(e);
    compSelect = computerGo();
    let gametotal = cwin + pwin + tiegame;
    if (playerSelect == compSelect){
        tiegame++
        tie.textContent = `T:${tiegame}`;
        alert("Tie game.");
        //return 2
    }
    else if (playerSelect == "rock" && compSelect == "scissors" || 
             playerSelect == "paper" && compSelect == "rock" ||
             playerSelect == "scissors" && compSelect == "paper"){
                 pwin++
                 playerWin.textContent = `W:${pwin}`;
                 alert("You win!");
        //return 1
             }
    else {
        cwin++
        alert("You lost.")
        compWin.textContent = `W:${cwin}`;
        console.log(pwin, cwin, tiegame);
        //return 0
    }
        console.log(gametotal);
        if(gametotal > 3){
        roundEnd(pwin,cwin);
    }
})
    );  
    
}

function roundEnd(pwin, cwin,){
    if (pwin == cwin){
        alert('tie match');
    }
    else if(pwin > cwin){
        alert('you win');
        playRndWin.style.backgroundImage = 'url(/home/jonas/Documents/theodinproject/js/rockpaperscissors/images/1.webp)';
    }
    else if (pwin < cwin) {alert('you lose');
    compRndWin.style.backgroundImage = 'url(/home/jonas/Documents/theodinproject/js/rockpaperscissors/images/1.webp)';
    }
    else{alert('something aint right')};
}
/*    
function game(){
    let win = 0;
    let loss = 0;
    let tie = 0;
for (i = 0; i < 5; i++){
    x = roundPlay()
    let lwt = ["loss", "win", "tie"];
    let outcome = lwt[roundPlay];
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
   alert("You won " + win + " games, lost " + loss + " games, and tied " + tie + " times.")
   if ( win > loss){
       alert("You win the match!")
   }
   else if (win < loss){
       alert("Sorry, you lost. It's hard to beat a computer.")
   }
   else{
       alert("Tie match.")
   };
}

while(i=0; i<5; i++){

}



//wrap whole thing in event listener on end game

*/