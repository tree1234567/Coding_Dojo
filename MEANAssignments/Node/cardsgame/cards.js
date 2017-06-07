// outline 

// want a deck with 52 cards
//deck should shuffe....
// reset the set after cards are taken out...
// deal a card
// have the dealt card no longer be in the deck!


//player 
// - name
// - should have a hand of 5 cards!
// - should be able to interat with the deck of cards and have a deal method...
// - player should be able to discard cards

function Deck(){
    
    this.buildDeck()
}

Deck.prototype.buildDeck = function(){
    var suits = ["hearts", "clubs", "spades", "diamonds"]
    var values = ["2","3","4", "5", "6", "7", "8", "9", "10",'jack','queen', 'king', 'ace']
    var self = this;
    this.cards = []
    
    
    suits.forEach(function(suit){
        values.forEach(function(value){
            self.cards.push(new Card(suit,value))
        });
    });
    return this;
}

Deck.prototype.shuffle = function(){
    var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  return this.cards;

}
Deck.prototype.reset = function(){
    this.buildDeck().shuffle();
}

Deck.prototype.dealRandomCard = function(){
    return (this.cards.length > 0) ? this.cards.pop() : null; 

}

function Card(suit,value){
    this.suit = suit;
    this.value = value;
}

function Player(name){
    this.name = name;
    this.hand = [];
}
Player.prototype.drawCards = function(){

}
Player.prototype.takeCard = function(){

}

Player.prototype.discard = function(){

}

