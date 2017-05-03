import React, { Component } from 'react';

import Slider from 'material-ui/Slider';

class TurnSlider extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="TurnSlider">
        <div className="TurnSlider-header">
          <h2>Select a turn:</h2>
        </div>
        <Slider defaultValue={0} min={0} max={this.props.numberOfTurns-1} step={1} value={this.props.turn} onChange={this.props.handleChangeTurn} />
      </div>
    );
  }
  
}

export default TurnSlider;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />