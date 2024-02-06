// A variable to save player's turn

var activePlayer = 1;

// A variable to save player's collect score
var scores = [0, 0];

// A variable to save player's round score
var roundScore = 0

//Start version
document.getElementById('score-1').textContent ='0';
document.getElementById('score-2').textContent = '0';

document.getElementById('current-2').textContent ='0';
document.getElementById('current-1').textContent = '0';

var diceDom =(document.querySelector(".dice"));
diceDom.style.display = 'none';

//Dice play evenbt listener
document.querySelector('.dice-roll').addEventListener
('click', function ()
{
    //link to dice img and dice math function
    var diceNum = Math.floor(Math.random()*6)+1;
    diceDom.style.display = 'block';
    diceDom.src = '/img/dice-' + diceNum + '.png';

if(diceNum !== 1) {
    roundScore = roundScore + diceNum;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
}
else {
    document.getElementById('current-' + activePlayer).textContent = 0;
    roundScore = 0;
     if(activePlayer === 1) {
        activePlayer = 2;
     }
     else{
        activePlayer = 1;
     }

     document.querySelector('.player-1').classList.toggle('active');
     document.querySelector('.player-2').classList.toggle('active');
    diceDom.style.display = 'none';

}
});