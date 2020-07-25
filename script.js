/**********************************************
 * STARTER CODE
 **********************************************/
/*
 * The code is based on the previous work for 'Deck of Cards'
 * Function shuffle():
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
    const copy = [...src]
  
    const length = copy.length
    for (let i = 0; i < length; i++) {
      const x = copy[i]
      const y = Math.floor(Math.random() * length)
      const z = copy[y]
      copy[i] = z
      copy[y] = x
    }
  
    if (typeof src === 'string') {
      return copy.join('')
    }
  
    return copy
  }
  
//This info will explain rules of the game  
  function help () {
    alert (`Welcome to Memory Game. 
  
  The game where you flip the cards and find pairs of the same cards.
  At each instance you can see no more than 2 cards.
  Once you start the game, you will be given 3 difficulty levels: EASY, MEDIUM and HARD.
  
  If you correctly guess 2 cards in sequence, their colours will become dim.
  If you guess incorrectly all the cards will become unflipped.
  
  To start a game by pressing OK button and selecting the game complexity option.
  The game will end after finding all the card pairs.`);
  }
  
  
  /**********************************************
   * MY CODE BELOW
   **********************************************/
  /*******************************************************************/
  // new code to link buttons
  let cardEasy = document.getElementById("easy");
  let cardMedium = document.getElementById("medium");
  let cardHard = document.getElementById("hard");
  let xs = document.getElementsByClassName("mobile");
  
  
  
  cardEasy.onclick = function(){
      const ranks = ['Q'];
      const families = ['clubs', 'diamonds', 'hearts', 'spades'];
      sss(ranks,families);
  }
  
  cardMedium.onclick = function(){
      const ranks = ['Q','K'];
      const families = ['clubs', 'diamonds', 'hearts', 'spades'];
      sss(ranks, families);
  }
  
  cardHard.onclick = function(){
      const ranks = ['Q','K','A'];
      const families = ['clubs', 'diamonds', 'hearts', 'spades'];
      sss(ranks,families);
  }
  /*******************************************************************/
  /*******************************************************************/
  
  function sss (ranks, families) {
  /*******************************************************************/
  for(let x of xs){ x.style.display = 'none';}
  const $deck = document.getElementById("deck");
  const deck =[];
  
  for(let k=0; k<2;k++) { 
    for (const family of families) {
      for(const rank of ranks)
        {
          deck.push(`
          <div class="card flipped">
            <div class="card__inner">
              <div class="card__front">
                <div class="number ${family}">${rank}</div>
                <div class="suit"><img src="img/${family}.png"></div>
                <div class="number ${family}">${rank}</div>
              </div>
              <div class="card__back"></div>
            </div>
          </div>
          `);
      }
    }
  }
  deck2 = shuffle(deck);
  
  $deck.innerHTML =  $deck.innerHTML + deck2.join(``); 
  /*******************************************************************/
  let y1 = document.getElementsByClassName("card");
  let y1length = y1.length;
  /*******************************************************************/
  
  $deck.addEventListener('click', function (e) { 
   
    const y2 = document.getElementsByClassName("flipped");
  
    if (y1.length - y2.length < 1){
        if (e.target.closest('.card')) { 
        e.target.closest('.card').classList.toggle('flipped') 
        }
      }
    else if ((y1.length - y2.length >= 1) || (y1.length - y2.length == 2)) 
      { 
        e.target.closest('.card').classList.toggle('flipped') 
        const y3 = document.querySelectorAll(".card:not(.flipped)"); //http://com.hemiola.com/2018/12/17/javascript-not-selector-examples/
        if(y3[0].isEqualNode(y3[1]) == true)  //https://www.w3schools.com/jsref/met_node_isequalnode.asp
        { 
        setTimeout(function(){
          y3[0].remove(); y3[1].remove();
          if(y1.length==0){ alert("The game is finished! Lets try Again or Next Level !"); return window.location.reload(); }
        },500);
        }
        else{  
              setTimeout(function(){
                for(let i=0; i < y1length;i++){ if(y1[i].classList.contains("flipped")==0){y1[i].classList.toggle('flipped');}
              }},500);
            }
      }
    else {         alert("end of game");      }
  });
  
  /*******************************************************************/
  }
  