import React, { Component } from 'react';

import './TurnSummary.css';

import CardImages from '../../../assets/CardImages';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Text from 'react-uikit-text';
import Panel from 'react-uikit-panel';

class TurnSummary extends Component {

  constructor(props) {
    super(props);
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
  		//let isLast = i === this.props.gdo.players.length - 1;
	  	let thisTurn = player.turns[this.props.turn];
		let numVictoryCards = thisTurn.cards.Victory ? Object.keys(thisTurn.cards.Victory).reduce((acc, val) => {
			return acc + thisTurn.cards.Victory[val].count;
		}, 0) : 0;
		let numTreasureCards = thisTurn.cards.Treasure ? Object.keys(thisTurn.cards.Treasure).reduce((acc, val) => {
			return acc + thisTurn.cards.Treasure[val].count;
		}, 0) : 0;
		let numActionCards = thisTurn.cards.Action ? Object.keys(thisTurn.cards.Action).reduce((acc, val) => {
			return acc + thisTurn.cards.Action[val].count;
		}, 0): 0;
		let percentTreasureCards = Math.floor(numTreasureCards / thisTurn.numCards * 100);
		return <div key={player.name} className="uk-grid uk-grid-small">
      		<h5 className="uk-width-1-1">{player.name}</h5>
		    <div className="uk-width-1-3">
		    	<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.VP_16px} />
		    	{thisTurn.points.vp}
		    </div>
		    <div className="uk-width-1-3">
		    	<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.PercentTreasure_16px} /> 
		    	{percentTreasureCards}%
		    </div>
		    <div className="uk-width-1-3">
		      	<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumCards_16px} /> 
		      	{thisTurn.numCards}
		    </div>
		    <div className="uk-width-1-3">
		    	<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumVictory_16px} /> 
		    	{numVictoryCards}
		    </div>
		    <div className="uk-width-1-3">
		    	<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumTreasure_16px} />
		    	{numTreasureCards}
		    </div>
		    <div className="uk-width-1-3">
		      	<img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.NumAction_16px} />
		      	{numActionCards}
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
      			<hr className="uk-width-1-1" style={{margin: '5px 0'}} />
		     	{players}
		    </div>
			<div className="uk-width-1-2 uk-card uk-card-small uk-card-body uk-background-muted">
      			<h3 className="uk-card-title">Turn Log</h3>
	     		<pre style={{overflow:'auto', height: '160px'}}>
		     		{playerLogs}
		     	</pre>
		    </div>
     	</div>
    );
  }
  
}

export default TurnSummary;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />