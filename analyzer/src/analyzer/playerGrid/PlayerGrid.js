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

    return (
      <Grid className="PlayerGrid" style="height:100%">
        <Grid col="1-1" className="PlayerGrid-header">
          <Panel col="2-5">
            <TurnSlider turn={this.state.turn} numberOfTurns={this.props.gdo.players[0].turns.length} handleChangeTurn={this.handleChangeTurn} />
          </Panel>
          <Panel col="2-5">
            <TurnSummary turn={this.state.turn} gdo={this.props.gdo} />
          </Panel>
          <Panel col="1-5">
              <PlayerGridSettings gdo={this.props.gdo} handleChangeSetting={this.handleChangeSetting} />
          </Panel>
        </Grid>
        <List col="1-1">
          {playerList}
        </List>
      </Grid>
    );
  }
  
}

export default PlayerGrid;
