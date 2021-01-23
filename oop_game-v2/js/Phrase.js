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
};