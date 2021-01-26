/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }
    /**
* Display phrase on game board
*/
addPhraseToDisplay() {
  const letterArr = this.phrase.split('');
  let html = '<div id="phrase" class="section">' +
                 '<ul>'
    let li = [];
    letterArr.forEach(letter => {
        if(letter === ' ') {
          li.push('<li class="hide space"> </li>')
        } else {
          li.push(`<li class="hide letter ${letter}">${letter}</li>`)
        }
    });
    li = li.join('');
    html += li
    html +=   '</ul>' + 
            '</div>'     
document.getElementById('phrase').innerHTML = html;
};

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/

checkLetter(letter) {
  const letterArr = this.phrase.split('');
  let check = 0;
  letterArr.forEach( i => {
   if(i === letter) {
     check += 1 
   }
   });
   if (check > 0) {
     return true;
   } else {
     return false;
   } 
  
};

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
   Note: I used 3 for loops because only 1 or 2 for loops would only partilly reveal all of the selected
   letter especially when the phrase had more than 3 or 4 of the same letter
*/
showMatchedLetter(letter) {
    const letterLi = document.getElementsByClassName('hide letter ' + `${letter}`);
  
    for (let i = 0; i < letterLi.length; i += 1) {
      letterLi[i].classList.replace('hide', 'show');
     };
     for (let i = 0; i < letterLi.length; i += 1) {
      letterLi[i].classList.replace('hide', 'show');
     }; 
     for (let i = 0; i < letterLi.length; i += 1) {
      letterLi[0].classList.replace('hide', 'show');
     };
};
};