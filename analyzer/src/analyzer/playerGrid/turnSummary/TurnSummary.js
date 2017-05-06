import React, { Component } from 'react';

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
  				<Text type="h6" col="1-1">Drag the slider to the left.</Text>
  			</Grid>
  		;
  	}

  	let players = this.props.gdo.players.map(player => {
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
		return <Grid className="uk-grid-small">
      		<Text type="h5" col="1-1">{player.name}</Text>
		    <Block col="1-3">
		    	<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} />
		    	{thisTurn.points.vp}
		    </Block>
		    <Block col="1-3">
		    	%<img style={{width:'16px', height:'18px'}} src={CardImages.Coin_16px} /> 
		    	{percentTreasureCards}%
		    </Block>
		    <Block col="1-3">
		      	&#35;<b>C</b> 
		      	{thisTurn.numCards}
		    </Block>
		    <Block col="1-3">
		    	&#35;<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} /> 
		    	{numVictoryCards}
		    </Block>
		    <Block col="1-3">
		    	&#35;<img style={{width:'16px', height:'18px'}} src={CardImages.Coin_16px} />
		    	{numTreasureCards}
		    </Block>
		    <Block col="1-3">
		      	&#35;<b>A</b>
		      	{numActionCards}
		    </Block>
	      	<hr className="uk-width-1-1" style={{margin: '5px 0'}} />
	    </Grid>;
  	});
  	let playerLogs = '';
  	for (var i = 0; i < this.props.gdo.players.length; i++) {
  		playerLogs += this.props.gdo.players[i].turns[this.props.turn].log + "\n\n";
  	}
    return (
      	<Grid className="TurnSummary">
	     	<Panel col="1-2">
		      	{header}
		     	{players}
		   	</Panel>
	     	<Panel col="1-2">
		     	<Text type="h5">Turn Log</Text>
	     		<pre style={{overflow:'auto', height: '200px'}}>
		     		{playerLogs}
		     	</pre>
		   	</Panel>
     	</Grid>
    );
  }
  
}

export default TurnSummary;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />