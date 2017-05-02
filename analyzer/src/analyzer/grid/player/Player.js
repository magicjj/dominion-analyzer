import React, { Component } from 'react';

import Deck from './deck/Deck';

class Player extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Player">
        <div className="Player-header">
          <img className="Player-logo" alt="player" />
          <h2>{this.props.player.name}</h2>
        </div>
        <Deck deck={this.props.player.turns[this.props.turn]} />
      </div>
    );
  }
  
}

export default Player;
