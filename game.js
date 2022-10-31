//sets starting score and options
let score = 0;

const gameOptions = ['rock', 'paper', 'scissors'];
document.getElementById('result-screen').style.display = 'none';
var compCirc = document.getElementById('computer-circle')
var playerCirc = document.getElementById('player-circle')



function playerPicks(num){
    
    let win = false
    let tie = false

    //gets player choice
    const playerChoice = gameOptions[num]
    console.log('player: ' + playerChoice);

    //generates computers choice
    const computerNum = Math.floor(Math.random()*3);
    const computerChoice = gameOptions[computerNum]
    console.log('computer: ' +computerChoice);

    //compares answers, assigns colour and determines the winner
    var playerImage = document.getElementById("player-image");
    switch(playerChoice){
        case 'rock':
            playerCirc.style.background = 'linear-gradient(0deg, hsl(349, 71%, 52%),hsl(349, 70%, 56%))';
            playerCirc.style.boxShadow = 'inset 0px -10px hsl(349, 93%, 29%)';
            playerImage.src = './images/icon-rock.svg';
            switch(computerChoice){
                case 'rock':
                    console.log('tie');
                    tie = true
                    break;
                case 'paper':
                    console.log('player lost')
                    win = false;
                    break;
                case 'scissors':
                    console.log('player win')
                    win = true;
                    break;
            }
            break;
        case 'paper':
            playerCirc.style.background = 'linear-gradient(0deg, hsl(230, 89%, 62%),hsl(230, 89%, 65%))';
            playerCirc.style.boxShadow = 'inset 0px -10px hsl(230, 69%, 48%)';
            playerImage.src = './images/icon-paper.svg';
            switch(computerChoice){
                case 'rock':
                    console.log('player win')
                    win = true;
                    break;
                case 'paper':
                    console.log('tie');
                    tie = true
                    break;
                case 'scissors':
                    console.log('player lost')
                    win = false;
                    break;
            }
            break;
        case 'scissors':
            playerCirc.style.background = 'linear-gradient(0deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))';
            playerCirc.style.boxShadow = 'inset 0px -10px hsl(34, 97%, 44%)';
            playerImage.src = './images/icon-scissors.svg';
            switch(computerChoice){
                case 'rock':
                    console.log('player lost')
                    win = false;
                    break;
                case 'paper':
                    console.log('player win')
                    win = true;
                    break;
                case 'scissors':
                    console.log('tie');
                    tie = true
                    break;
            }
            break;
    }

    var compImage = document.getElementById("computer-image");
    switch(computerChoice){
        case 'rock':
            compCirc.style.background = 'linear-gradient(0deg, hsl(349, 71%, 52%),hsl(349, 70%, 56%))';
            compCirc.style.boxShadow = 'inset 0px -10px hsl(349, 93%, 29%)';
            compImage.src = './images/icon-rock.svg';
            break;
        case 'paper':
            compCirc.style.background = 'linear-gradient(0deg, hsl(230, 89%, 62%),hsl(230, 89%, 65%))';
            compCirc.style.boxShadow = 'inset 0px -10px hsl(230, 69%, 48%)';
            compImage.src = './images/icon-paper.svg';
            break;
        case 'scissors':
            compCirc.style.background = 'linear-gradient(0deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))';
            compCirc.style.boxShadow = 'inset 0px -10px hsl(34, 97%, 44%)';
            compImage.src = './images/icon-scissors.svg';
            break;
    }

    //reveals who won and increments score
    if(win === true){
        score++;
        document.getElementById('game-announcement').innerHTML = 'YOU WIN';
    } else if(tie===true){
        document.getElementById('game-announcement').innerHTML = 'YOU TIED';
    }else {
        document.getElementById('game-announcement').innerHTML = 'YOU LOSE';
        score--;
    }

    //updates score
    console.log('score: ' + score);
    document.getElementById('score').innerHTML = score;

    //hides the game UI
    var gameScreen = document.getElementById('game');
    var resultScreen = document.getElementById('result-screen');
    if (gameScreen.style.display === "flex") {
        gameScreen.style.display = "none";
        resultScreen.style.display = "flex";
    } else {
        game.style.display = "none";
        resultScreen.style.display = "flex";
    }

}

function playAgain(){
    var gameScreen = document.getElementById('game');
    var resultScreen = document.getElementById('result-screen');
    if (gameScreen.style.display === "none") {
        gameScreen.style.display = "flex";
        resultScreen.style.display = "none";
    } else {
        gameScreen.style.display = "flex";
        resultScreen.style.display = "none";
    }
}


//Controls 'Rules' Menu
function rulesDisplay(){
    var rulesMenu = document.getElementById('rules');
    if (rulesMenu.style.display === "none") {
        rulesMenu.style.display = "flex";
      } else {
        rulesMenu.style.display = "none";
      }
}