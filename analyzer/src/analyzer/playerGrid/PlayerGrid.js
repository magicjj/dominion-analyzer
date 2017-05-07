import React, { Component } from 'react';

import TurnSlider from './turnSlider/TurnSlider';
import TurnSummary from './turnSummary/TurnSummary';
import PlayerGridSettings from './playerGridSettings/PlayerGridSettings';
import Player from './player/Player';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Button from 'react-uikit-button';
import Form from 'react-uikit-form';
import List from 'react-uikit-list';
import Panel from 'react-uikit-panel';
import ListItem from 'react-uikit-list/lib/list-item';

class PlayerGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 0
    };
    this.handleChangeTurn = this.handleChangeTurn.bind(this);
    this.handleChangeSetting = this.handleChangeSetting.bind(this);
  }

  handleChangeTurn(e, val) {
    try {
      this.setState({ turn: parseInt(val) });
    } catch(e) {
      // don't change turn
    }
  }

  handleChangeSetting(e, val) {
    try {
      console.log(e);
      console.log(val);
      //this.setState({ turn: parseInt(val) });
    } catch(e) {
      // don't change turn
    }
  }

  render() {
    let playerList = [];
    for (var i = 0; i < this.props.gdo.players.length; i++) {
      playerList.push(
        <ListItem key={i}>
          <Player player={this.props.gdo.players[i]} turn={this.state.turn} />
        </ListItem>
      );
    }
    
// todo fix the stupid margin bullshit below
    return (
          <div className="uk-width-1-1 uk-height-1-1 uk-grid-match uk-grid uk-margin" uk-grid>
            <div className="uk-width-2-5">
              <TurnSlider gdo={this.props.gdo} turn={this.state.turn} numberOfTurns={this.props.gdo.players[0].turns.length} handleChangeTurn={this.handleChangeTurn} />
            </div>
            <div className="uk-width-2-5">
              <TurnSummary turn={this.state.turn} gdo={this.props.gdo} />
            </div>
            <div className="uk-width-1-5">
                <PlayerGridSettings gdo={this.props.gdo} handleChangeSetting={this.handleChangeSetting} />
            </div>
            <List col="1-1" className="playerGrid">
              {playerList}
            </List>
          </div>
    );
  }
  
}

export default PlayerGrid;
