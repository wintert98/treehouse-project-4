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
}
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const i = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[i]
    return randomPhrase;
};
};