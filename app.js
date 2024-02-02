// A variable to save player's turn

var activePlayer = 1;

// A variable to save player's collect score
var scores = [0, 0];

// A variable to save player's round score
var roundScore = 0


// A variable to save dice's movement /Random 1-6/

var dice = Math.floor(Math.random()*6)+1;

//Start version
document.querySelector('#score-1').textContent ='0';
document.querySelector('#score-2').textContent = '0';

document.querySelector('#current-2').textContent ='0';
document.querySelector('#current-1').textContent = '0';
document.querySelector(".dice").style.display = 'none';

console.log('Dice: ' + dice);