class Card {
    constructor(suit, stringValue, numValue) {
        this.suit = suit;
        this.stringValue = stringValue;
        this.numValue = numValue;
    }
    showCard() {
        console.log(`Suit: ${this.suit}, Name: ${this.stringValue}, Value: ${this.numValue}`);
    }
}
class Deck {
    constructor() {
        this.deck = [];
        const stringValues = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
        for (var i = 0; i < suits.length; i++){
            for (var j = 0; j < stringValues.length; j++){
                this.deck.push(new Card(suits[i],stringValues[j],j+1)); 
            }
        }
    }
    shuffle() {
        var m = this.deck.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = this.deck[m];
          this.deck[m] = this.deck[i];
          this.deck[i] = t;
        }
        return this.deck;
    }
    reset(){
        this.deck = [];
        const stringValues = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
        for (var i = 0; i < suits.length; i++){
            for (var j = 0; j < stringValues.length; j++){
                this.deck.push(new Card(suits[i],stringValues[j],j+1)); 
            }
        }    
        return this.deck;
    }
    deal() {
        var i = this.deck.length-1;
        var card = this.deck[i]
        this.deck.pop();
        return card;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    discard(i) {
        this.hand.splice(i,1);
        console.log(this.hand);
        return this;
    }
}

const newCard = new Card("Wild", "Joker", 14);
newCard.showCard();

const newDeck = new Deck;
console.log(newDeck);
newDeck.shuffle();
console.log(newDeck);
newDeck.reset();
console.log(newDeck);
console.log(newDeck.deal());
console.log(newDeck);

const newPlayer = new Player("Kermit");
console.log(newPlayer);
newPlayer.draw(newDeck);
newPlayer.draw(newDeck);
newPlayer.draw(newDeck);
newPlayer.draw(newDeck);
newPlayer.draw(newDeck);
console.log(newPlayer);
newPlayer.discard(1);
console.log(newPlayer);
