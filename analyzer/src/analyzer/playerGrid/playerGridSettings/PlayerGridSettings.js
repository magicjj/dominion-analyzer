import React, { Component } from 'react';

import Panel from 'react-uikit-panel';

class PlayerGridSettings extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Panel className="PlayerGridSettings">
        <div className="PlayerGridSettings-header">
          <h3>Settings:</h3>
        </div>
      </Panel>
    );
  }
  
}

export default PlayerGridSettings;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />