import React, { Component } from 'react';

import './Deck.css';

// TODO tree shaking
import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Button from 'react-uikit-button';
import Panel from 'react-uikit-panel';
import Badge from 'react-uikit-badge';
import List from 'react-uikit-list';
import ListItem from 'react-uikit-list/lib/list-item';

import CardImages from '../../../../assets/CardImages';

class Deck extends Component {

  constructor(props) {
    super(props);
  }

  getCountChange(typeKey, cardKey) {
      let thisTurnCards = this.props.turns[this.props.turn].cards;
      let lastTurnCards = this.props.turns[this.props.turn-1];
      if (! lastTurnCards) {
        return 0;
      } else {
        lastTurnCards = lastTurnCards.cards;
      }
      let thisCount = thisTurnCards[typeKey][cardKey].count;
      let lastCount = 0;
      if (lastTurnCards && lastTurnCards[typeKey] && lastTurnCards[typeKey][cardKey]) {
        lastCount = lastTurnCards[typeKey][cardKey].count;
      }
      return thisCount - lastCount;
  }

  render() {
    let thisTurn = this.props.turns[this.props.turn];
    let cardStacks = [];
    for (let typeKey in thisTurn.cards) {
      let cards = thisTurn.cards[typeKey];
      for (let cardKey in cards) {
        let count = cards[cardKey].count;
        let stacked = 'cardPanel';
        let cardList = [];
        while (count > 0) {
          let countBadge, countChangeBadge;
          if (count === 1) {
            // it's the last card, add badges
            countBadge = <Badge notification>{cards[cardKey].count}</Badge>;
            let countChange = this.getCountChange(typeKey, cardKey);
            if (countChange !== 0) {
              // todo change uk-label-danger
              countChangeBadge = <Badge notification className="uk-label-danger">{(countChange > 0 ? '+' : '') + countChange}</Badge>;
              // todo I'd like to get additional animation on this badge after the card comes in
            }
          }
          cardList.push(
              <div key={cardKey + count} className="card uk-text-right uk-animation-scale-up uk-transform-origin-bottom-center"
                style={{background: "url(" + CardImages[cardKey] + ")"}}>
                {countBadge}
                {countChangeBadge}
              </div>
          );
          stacked = 'cardPanel stacked';
          count--;
        }
        cardStacks.push(
          <Panel context="primary" key={cardKey} className="cardPanel">
            {cardList}
          </Panel>
        )
      }
    }

    return (
      <Grid type="list" className="Deck">
        {cardStacks}
      </Grid>
    );
  }
  
}

export default Deck;
