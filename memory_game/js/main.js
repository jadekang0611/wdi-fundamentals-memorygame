const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];
const cardsInPlay = [];

function checkForMatch() {
      if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  };

function flipCard (){
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);


  var cardsToPlay = 2;
  if (cardsInPlay.length === cardsToPlay) {
  checkForMatch();
  }
};

function createBoard() {
  for (var i=0; i < cards.length; i+=1) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', "images/back.png");
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
  }
};

var reset = function() {
  for (i = 0; i < cards.length; i+=1) {
    document.getElementsByTagName('img')[i].setAttribute('src', "images/back.png");
  }
};


createBoard();

var button = document.querySelector('button');
button.addEventListener('click', reset);
