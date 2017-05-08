import React, { Component } from 'react';

import Deck from './deck/Deck';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Button from 'react-uikit-button';
import Form from 'react-uikit-form';
import Text from 'react-uikit-text';
import ListItem from 'react-uikit-list/lib/list-item';

class Player extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="Player">
        <h3 className="uk-width-1-1 uk-margin-left">{this.props.player.name}</h3>
        <Deck turns={this.props.player.turns} turn={this.props.turn} col="1-1" />
      </Grid>
    );
  }
  
}

export default Player;
