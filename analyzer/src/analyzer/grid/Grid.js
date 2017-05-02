import React, { Component } from 'react';

import Slider from './slider/Slider';
import Player from './player/Player';

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 0
    };
    this.handleChangeTurn = this.handleChangeTurn.bind(this);
  }

  handleChangeTurn(e) {
    try {
      this.setState({ turn: parseInt(e.target.value) });
    } catch(e) {
      // don't change turn
    }
  }

  render() {
    let playerList = [];
    for (var i = 0; i < this.props.gdo.players.length; i++) {
      playerList.push(
        <li key={i}><Player player={this.props.gdo.players[i]} turn={this.state.turn} /></li>
      );
    }

    return (
      <div className="Grid">
        <div className="Grid-header">
          <h2>Current Deck</h2>
          <Slider turn={this.state.turn} handleChangeTurn={this.handleChangeTurn} />
        </div>
        <ul>
          {playerList}
        </ul>
      </div>
    );
  }
  
}

export default Grid;
