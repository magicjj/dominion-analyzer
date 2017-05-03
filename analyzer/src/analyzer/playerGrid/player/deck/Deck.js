import React, { Component } from 'react';

// TODO tree shaking
import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Button from 'react-uikit-button';
import Panel from 'react-uikit-panel';
import List from 'react-uikit-list';
import ListItem from 'react-uikit-list/lib/list-item';

class Deck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: props.deck
    };
  }

  render() {
    let cardList = [];
    for (let typeKey in this.props.deck.cards) {
      let cards = this.props.deck.cards[typeKey];
      for (let cardKey in cards) {
        let count = cards[cardKey];
        while (count > 0) {
          cardList.push(
            <Panel context="primary">
              {cardKey}
            </Panel>
          );
          count--;
        }
      }
    }

    return (
      <Grid widths="1-10" type="list" className="Deck">
        {cardList}
      </Grid>
    );
  }
  
}

export default Deck;
