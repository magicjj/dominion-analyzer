import React, { Component } from 'react';

class Slider extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Slider">
        <div className="Slider-header">
          <h2>Select a turn:</h2>
        </div>
        <input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />
      </div>
    );
  }
  
}

export default Slider;
