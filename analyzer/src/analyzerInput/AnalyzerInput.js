import React, { Component } from 'react';

import './AnalyzerInput.css';

class AnalyzerInput extends Component {

  constructor(props) {
    super(props);
  }

  handleFocus(e) {
    e.target.select();
  }

  render() {
    return (
      <div className="uk-float-right uk-margin-right" style={{paddingTop: '8px'}}>
        <button type="button" data-uk-toggle="target: #analyzeModal" className="uk-button uk-button-primary uk-height-1-1">Analyze</button>

<div id="analyzeModal" data-uk-modal="center: true">
    <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
        <div className="uk-modal-header">
            <h2 className="uk-modal-title">Analyze Game</h2>
        </div>
        <div className="uk-modal-body uk-background-muted">
            <textarea className="uk-textarea logInput" onChange={this.props.handleChangeFormInput} value={this.props.formInput} onFocus={this.handleFocus}
              placeholder="Paste full game log here"></textarea>
            
        </div>
        <div className="uk-modal-footer uk-text-right">
            <button className="uk-button uk-button-primary uk-margin-small-left uk-modal-close" type="button" onClick={this.props.handleSubmitFormInput}>Analyze</button>
        </div>
    </div>
</div>

      </div>
    );
  }
}

export default AnalyzerInput;