import React, { Component } from 'react';

import './PlayerGridSettings.css';

class PlayerGridSettings extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <form className="uk-form-stacked">

          <div className="uk-margin">
              <label className="uk-form-label" htmlFor="cardSize">Card Size:</label>
              <div className="uk-form-controls">
                  <select name="cardSize" id="cardSize" className="uk-select" onChange={this.props.handleChangeSetting} value={this.props.cardSize}>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                  </select>
              </div>
          </div>

          <div className="uk-margin">
              <label className="uk-form-label" htmlFor="cardView">Card View:</label>
              <div className="uk-form-controls">
                  <select name="cardView" id="cardView" className="uk-select" onChange={this.props.handleChangeSetting} value={this.props.cardView}>
                      <option value="square">Cropped Square</option>
                      <option value="full">Full Size</option>
                  </select>
              </div>
          </div>

      </form>
    );
  }
  
}

export default PlayerGridSettings;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />