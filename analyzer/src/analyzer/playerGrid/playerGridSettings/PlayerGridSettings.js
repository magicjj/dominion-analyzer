import React, { Component } from 'react';

import Panel from 'react-uikit-panel';

class PlayerGridSettings extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="uk-width-1-1 uk-card uk-card-small uk-card-body uk-background-muted">
        <h3 className="uk-card-title">Settings:</h3>
      </div>
    );
  }
  
}

export default PlayerGridSettings;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />