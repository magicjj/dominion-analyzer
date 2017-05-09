import React, { Component } from 'react';

import './TurnSummary.css';

import CardImages from '../../../assets/CardImages';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Text from 'react-uikit-text';
import Panel from 'react-uikit-panel';

import Tooltip from 'rc-tooltip';

class TurnSummary extends Component {

  constructor(props) {
    super(props);
  }

  getSummaryDataForTurn(turn) {
  	let victoryPoints = turn.points.vp ? turn.points.vp : 0;
  	let numCards = turn.numCards;
  	let numVictoryCards = turn.cards.Victory ? Object.keys(turn.cards.Victory).reduce((acc, val) => {
		return acc + turn.cards.Victory[val].count;
	}, 0) : 0;
	let numTreasureCards = turn.cards.Treasure ? Object.keys(turn.cards.Treasure).reduce((acc, val) => {
		return acc + turn.cards.Treasure[val].count;
	}, 0) : 0;
	let numActionCards = turn.cards.Action ? Object.keys(turn.cards.Action).reduce((acc, val) => {
		return acc + turn.cards.Action[val].count;
	}, 0): 0;
	let percentTreasureCards = Math.floor(numTreasureCards / turn.numCards * 100);
	return { victoryPoints, numCards, numVictoryCards, numTreasureCards, numActionCards, percentTreasureCards }
  }

  getTurnDiff(thisTurn, lastTurn) {
  	let diff = {};
  	for (let key in thisTurn) {
  		diff[key] = thisTurn[key] - lastTurn[key];
  	}
  	return diff;
  }

  getDiffDisplay(diff, trailing) {
  	let textClass;
  	if (diff === 0 || ! diff) {
  		return null;
  	} else if (diff > 0) {
  		textClass = "uk-text-success";
  	} else {
  		textClass = "uk-text-danger";
  	}
  	return <span className={textClass} style={{marginLeft: '10px'}}>{diff > 0 ? '+' : ''}{diff}{trailing}</span>
  }
  
  render() {

  	let header = <Text type="h3" col="1-1">Current Turn: {this.props.turn}</Text>;
  	if (this.props.turn === 0) {
  		header = 
  			<Grid col="1-1" gutter="collapse">
  				<Text type="h3" col="1-1">Starting Deck</Text>
  			</Grid>
  		;
  	}

  	let players = this.props.gdo.players.map((player, i) => {
	  	let thisTurn = player.turns[this.props.turn];
		let thisTurnSummary = this.getSummaryDataForTurn(thisTurn);
		let diff = {};
		if (this.props.turn !== 0) {
			let lastTurn = player.turns[this.props.turn - 1];
			let lastTurnSummary = this.getSummaryDataForTurn(lastTurn);
			diff = this.getTurnDiff(thisTurnSummary, lastTurnSummary);
		}
		return <div key={player.name} className="uk-grid uk-grid-small">
      		<h5 className="uk-width-1-1">{player.name}</h5>
		    <div className="uk-width-1-6">
				<Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span>Victory Points</span>}>
		    		<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.VP_16px} />
				</Tooltip>
		    	{thisTurnSummary.victoryPoints}
		    </div>
		    <div className="uk-width-1-6">
		    	{this.getDiffDisplay(diff.victoryPoints)}
		    </div>
		    <div className="uk-width-1-6">
				<Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span>Percentage of Treasure Cards</span>}>
		    		<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.PercentTreasure_16px} /> 
				</Tooltip>
		    	{thisTurnSummary.percentTreasureCards}%
		    </div>
		    <div className="uk-width-1-6">
		    	{this.getDiffDisplay(diff.percentTreasureCards, '%')}
		    </div>
		    <div className="uk-width-1-6">
				<Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span>Total Number of Cards</span>}>
		      		<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumCards_16px} /> 
				</Tooltip>
		      	{thisTurnSummary.numCards}
		    </div>
		    <div className="uk-width-1-6">
		    	{this.getDiffDisplay(diff.numCards)}
		    </div>
		    <div className="uk-width-1-6">
				<Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span>Number of Victory Cards</span>}>
		    		<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumVictory_16px} /> 
				</Tooltip>
		    	{thisTurnSummary.numVictoryCards}
		    </div>
		    <div className="uk-width-1-6">
		    	{this.getDiffDisplay(diff.numVictoryCards)}
		    </div>
		    <div className="uk-width-1-6">
				<Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span>Number of Treasure Cards</span>}>
		    		<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumTreasure_16px} />
				</Tooltip>
		    	{thisTurnSummary.numTreasureCards}
		    </div>
		    <div className="uk-width-1-6">
		    	{this.getDiffDisplay(diff.numTreasureCards)}
		    </div>
		    <div className="uk-width-1-6">
				<Tooltip placement="right" arrowContent={<div className="tooltip-arrow-left" />} overlay={<span>Number of Action Cards</span>}>
		      		<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumAction_16px} />
				</Tooltip>
		      	{thisTurnSummary.numActionCards}
		    </div>
		    <div className="uk-width-1-6">
		    	{this.getDiffDisplay(diff.numActionCards)}
		    </div>
	      	<hr className="uk-width-1-1" style={{margin: '5px 0 0 0'}} />
	    </div>;
  	});
  	// default this to what we want to show for turn=0 aka starting deck, bc it has no logs
  	let playerLogs = 'Currently showing the starting deck for each player. Move the TURN SLIDER to see how the deck grows throughout the game.';
  	if (this.props.turn > 0) {
  		playerLogs = '';
	  	for (var i = 0; i < this.props.gdo.players.length; i++) {
	  		playerLogs += this.props.gdo.players[i].turns[this.props.turn].log;
	  	}
  	}
    return (
      	<div className="uk-grid uk-grid-small">
			<div className="uk-width-1-2 uk-card uk-card-small uk-card-body uk-background-muted">
      			<h3 className="uk-card-title">{header}</h3>
      			<hr className="uk-width-1-1" style={{margin: '5px 0 0 0'}} />
				<div style={{height: '155px', overflow: 'auto'}}>
		     		{players}
				</div>
		    </div>
			<div className="uk-width-1-2 uk-card uk-card-small uk-card-body uk-background-muted">
      			<h3 className="uk-card-title">Turn Log</h3>
      			<hr className="uk-width-1-1" style={{margin: '5px 0 0 0'}} />
	     		<pre style={{overflow:'auto', height: '145px', marginTop:'10px'}}>
		     		{playerLogs}
		     	</pre>
		    </div>
     	</div>
    );
  }
  
}

export default TurnSummary;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />