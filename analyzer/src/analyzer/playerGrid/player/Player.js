import React, { Component } from 'react';

import Deck from './deck/Deck';

class Player extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-uk-grid className="Player">
        <h3 className="uk-width-1-1 uk-margin-left">{this.props.player.name}</h3>
        <Deck turns={this.props.player.turns} turn={this.props.turn} col="1-1" />
      </div>
    );
  }
  
}

export default Player;
