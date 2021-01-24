/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
let buttons = document.getElementsByClassName('key')

// Event listener for start button clicked to start game
startBtn.addEventListener('click',(e) => {
   game = new Game();
   game.startGame(); 
   // Starting game from win or lose screen starts new game
   if (overlay.className === "win"|| overlay.className === "lose") {
      window.location.hash = 'reload';
      window.location.reload();
   }
  });
//When the document has loaded, call the function to start new game from win or lose screen
document.addEventListener("DOMContentLoaded", function(event) { 
    if(window.location.hash == "#reload") {
        game = new Game();
        game.startGame();
        window.location.hash = ''
    }
});
//Event listener for qwerty button inputs during game play
for(let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click',(e) => {
       const button = e.target
    game.handleInteraction(button) 
   });
}
