import React, { Component } from 'react';

import './Deck.css';
import CardImages from '../../../../assets/CardImages';

import Tooltip from 'rc-tooltip';


class Deck extends Component {

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
        if (count <= 0) {
          continue;
        }

        let cardList = [];
        while (count > 0) {
          let countBadge, countChangeBadge;
          if (count === 1) {
            // it's the last card, add badges
            countBadge = <Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span># of copies in stack</span>}>
                  <span className="uk-badge">{cards[cardKey].count}</span>
              </Tooltip>;
            let countChange = this.getCountChange(typeKey, cardKey);
            if (countChange !== 0) {
              countChangeBadge = <Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span># of copies {countChange > 0 ? 'added' : 'removed'} this turn</span>}>
                  <span className="uk-badge uk-label-danger">{(countChange > 0 ? '+' : '') + countChange}</span>
              </Tooltip>;
            }
          }
          cardList.push(
              <div key={cardKey + count} className="card uk-text-right uk-animation-scale-up uk-transform-origin-bottom-center"
                style={{background: "url(" + CardImages[cardKey] + ")"}}>
                {countBadge}
                {countChangeBadge}
              </div>
          );
          count--;
        }
        cardStacks.push(
          <div key={cardKey} className={"cardPanel " + cardKey}>
            {cardList}
          </div>
        )
      }
    }
    
    return (
      <div data-uk-grid className="Deck">
        {cardStacks}
      </div>
    );
  }
  
}

export default Deck;
