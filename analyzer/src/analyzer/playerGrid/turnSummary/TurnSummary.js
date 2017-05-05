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
    return (
      <Panel className="TurnSummary">
	      {header}
	      <Text type="h5" col="1-1">magcij</Text>
	      <Grid>
		      <Block col="1-3">
		      	<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} />12
		      </Block>
		      <Block col="1-3">
		      	<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} />12
		      </Block>
		      <Block col="1-3">
		      	<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} />12
		      </Block>
	      </Grid>
	      <hr className="uk-width-1-1" style={{margin: '5px 0'}} />
	      <Text type="h5" col="1-1">plary23</Text>
	      <Grid>
		      <Block col="1-3">
		      	<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} />12
		      </Block>
		      <Block col="1-3">	      
		      	<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} />12
		      </Block>
		      <Block col="1-3">
		      	<img style={{width:'16px', height:'18px'}} src={CardImages.VP_16px} />12
		      </Block>
	      </Grid>
      </Panel>
    );
  }
  
}

export default TurnSummary;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />