const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0
}

function restart(){
    score.wins = 0;
    score.loses = 0;
    localStorage.setItem('score', JSON.stringify(score));
    let result = 'Wins: 0 Loses: 0'
    document.querySelector('.move').innerHTML = result;
}

function playGame(move){
    let computerMove = getComputerMove();
    let result = '';
    if(move === computerMove){
        score.wins++;
        result = `You win!You both selected ${move}.
Wins: ${score.wins} Loses: ${score.loses}`;                   
    } else {
        score.loses++;
        result = `You lose!You chose ${move} and the computer chose the oposit.
Wins: ${score.wins} Loses: ${score.loses}`;
    }
    document.querySelector('.move').innerHTML = result;
    localStorage.setItem('score', JSON.stringify(score));
}
function getComputerMove(){
    let random = Math.random();
    let computerMove = '';
    if(random < 0.5){
        computerMove = 'heads';
    } else if(random >= 0.5){
        computerMove = 'tails';
    }
    return computerMove;
}