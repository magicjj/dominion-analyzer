import React, { Component } from 'react';

import './Deck.css';

// TODO tree shaking
import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Button from 'react-uikit-button';
import Panel from 'react-uikit-panel';
import List from 'react-uikit-list';
import ListItem from 'react-uikit-list/lib/list-item';

import CardImages from '../../../../assets/CardImages';

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
        let stacked = 'cardPanel';
        while (count > 0) {
          cardList.push(
            <Panel context="primary" key={cardKey + count} className={stacked}>
              <img src={CardImages[cardKey]} />
            </Panel>
          );
          stacked = 'cardPanel stacked';
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
