/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// Game class with constructor
class Game {
    constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = null;
    }
 /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
     const phrases = [new Phrase('Between a Rock and a Hard Place'),
                      new Phrase('Burst Your Bubble'),
                      new Phrase('Barking Up The Wrong Tree'),
                      new Phrase('Curiosity Killed The Cat'),
                      new Phrase('Cut To The Chase'),
                      new Phrase('Close but no cigar'),
                      new Phrase('An Arm and a Leg'),
                      new Phrase('A Piece of Cake'),
                      new Phrase('A Dime a Dozen'),
                      new Phrase('Cry Over Spilled Milk')                  
              ];
    return phrases;
};
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const i = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[i];
    return randomPhrase;
};
/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
  this.activePhrase = this.getRandomPhrase();
  this.activePhrase.addPhraseToDisplay();
};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
  const letterArr = this.activePhrase.phrase.split('')
  const letterLi = document.getElementsByClassName('show');
  let check1 = 0;
  let check2 = 0;
  letterArr.forEach( i => {
    if (i !== " ") {
     check1 += 1;
    }
  });
  for (let i = 0; i < letterLi.length; i += 1) {
    if (letterLi[i].className = 'show') {
      check2 += 1;
    }
  };
  if (check1 === check2) {
    return true;
  } else {
    return false;
  }
};
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
  let heart = document.querySelector("img[src='images/liveHeart.png']");
  heart.src="images/lostHeart.png";
  this.missed += 1;
  if (this.missed === 5) {
    this.gameOver()
  }
};
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
  const overlay = document.getElementById('overlay');
  const h1 = document.getElementById('game-over-message');
  const htmlWin = '<h1>Great Job! You Won!</h1>'
  const htmlLose = '<h1>Sorry, better luck next time.</h1>'
  overlay.style.visibility = "visible";
  if (gameWon) {
    overlay.className = "win"
    h1.innerHTML = htmlWin
  } else {
    overlay.className = "lose"
    h1.innerHTML = htmlLose
  }
};
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
  const btn = button.innerHTML;
  if (this.activePhrase.checkLetter(btn)) {
    this.activePhrase.showMatchedLetter(btn)
    button.disabled = true;
    button.className ="chosen";
    // checks for game over and win
    if(this.checkForWin()) {
    this.gameOver(this.checkForWin());
    }
  } else {
    button.disabled = true;
    button.className ="wrong";
    this.removeLife();
  }
  };
};