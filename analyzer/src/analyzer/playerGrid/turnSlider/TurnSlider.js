import React, { Component } from 'react';

import Slider from 'material-ui/Slider';

class TurnSlider extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="uk-width-1-1 uk-card uk-card-body uk-background-muted" style={{marginLeft:'20px'}}>
        <h3 className="uk-card-title">Select a turn:</h3>
        <Slider defaultValue={0} min={0} max={this.props.numberOfTurns-1} step={1} value={this.props.turn} onChange={this.props.handleChangeTurn} />
      </div>
    );
  }
  
}

export default TurnSlider;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />