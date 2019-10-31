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
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}
function flipCard (cardId){
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();

}

flipCard(0);
flipCard(2);





/*First you'll create a function that will store all steps related to selecting, or
flipping over, a card. When the user flips a card over, you'll want to add that card
to the array of cards that are in play. If the user has flipped over two cards,
you'll want to check for a match.

Second, you'll create a function to group together the logic to check to see if the
two cards that the user has flipped over match each other. You'll provide feedback to
the user letting them know if the two cards match, or if they should try again.*/
