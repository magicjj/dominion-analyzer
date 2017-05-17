import React, { Component } from 'react';

import TurnSlider from './turnSlider/TurnSlider';
import TurnSummary from './turnSummary/TurnSummary';
import Player from './player/Player';

class PlayerGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 0
    };
    this.handleChangeTurn = this.handleChangeTurn.bind(this);
  }

  handleChangeTurn(e, val) {
    try {
      this.setState({ turn: parseInt(val) });
    } catch(e) {
      // don't change turn
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gdo.resetTurn) {
      this.setState({ turn: 0 });
    }
  }

  render() {
    let playerList = [];
    for (var i = 0; i < this.props.gdo.players.length; i++) {
      playerList.push(
        <li key={i}>
          <Player player={this.props.gdo.players[i]} turn={this.state.turn} />
        </li>
      );
    }

// todo fix the stupid margin bullshit below
    return (
          <div data-uk-grid className="uk-width-1-1 uk-height-1-1 uk-g uk-grid-match uk-grid uk-margin">
            <div className="uk-width-1-2">
              <TurnSlider gdo={this.props.gdo} turn={this.state.turn} numberOfTurns={this.props.gdo.players[0].turns.length} handleChangeTurn={this.handleChangeTurn} />
            </div>
            <div className="uk-width-1-2">
              <TurnSummary turn={this.state.turn} gdo={this.props.gdo} />
            </div>
            <ul className="uk-list uk-width-1-1 playerGrid uk-margin-top">
              {playerList}
            </ul>
          </div>
    );
  }
  
}

export default PlayerGrid;
