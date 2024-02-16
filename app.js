
// A variable to save player's turn
var activePlayer;

// A variable to save player's collect score
var scores;

// A variable to save player's round score
var roundScore;

// Dice picture
var diceDom =(document.querySelector(".dice"));

var isNewGame;


//Start version
function initGame(){

isNewGame = true;

activePlayer = 1;

scores = [0, 0, 0];

roundScore = 0;

document.getElementById('score-1').textContent ='0';
document.getElementById('score-2').textContent = '0';

document.getElementById('current-2').textContent ='0';
document.getElementById('current-1').textContent = '0';
diceDom.style.display = 'none';
}

function switchPlayer(){
    document.getElementById('current-' + activePlayer).textContent = 0;

    roundScore = 0;
    
     if(activePlayer === 1) {
        activePlayer = 2;
     }
     else{
        activePlayer = 1;
     }
     //change red button
     document.querySelector('.player-1').classList.toggle('active');
     document.querySelector('.player-2').classList.toggle('active');
    diceDom.style.display = 'none';
}

initGame();


//Dice play evenbt listener 'roll dice button'
document.querySelector('.dice-roll').addEventListener
('click', function ()
{
    if(isNewGame){
        var diceNum = Math.floor(Math.random()*6)+1;
        diceDom.style.display = 'block';
//link to dice img and dice math function
        diceDom.src = '/img/dice-' + diceNum + '.png';
    
    if(diceNum !== 1) {
        roundScore = roundScore + diceNum;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else {
        switchPlayer();
    };
}
});
// hold button
document.querySelector('.hold').addEventListener
('click', function(){
    if(isNewGame){
    scores[activePlayer] = scores[activePlayer] + roundScore;

document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
}
//WInner
if(scores[activePlayer] >= 10){
    document.getElementById('name-' + activePlayer).textContent= "Winner!!!";
    document.querySelector('.player-' + activePlayer).classList.add('winner');
    document.querySelector('.player-' + activePlayer).classList.remove('active');
    isNewGame =false;
} 
});

//New game function
document.querySelector('.new-game').addEventListener('click', initGame);