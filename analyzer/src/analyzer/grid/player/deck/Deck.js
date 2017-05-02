import React, { Component } from 'react';

class Deck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: props.deck
    };
  }

  render() {
    let cardList = [];
    for (var key in this.props.deck) {
      cardList.push(
        <li key={key}>{key} = {JSON.stringify(this.props.deck[key])}</li>
      );
    }

    return (
      <div className="Deck">
        <div className="Deck-header">
          <h2>Deck</h2>
        </div>
        <ul>
          {cardList}
        </ul>
      </div>
    );
  }
  
}

export default Deck;
