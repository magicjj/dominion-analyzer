import React, { Component } from 'react';
import $ from 'jquery'; // TODO can remove?

import './AnalyzerInput.css';

import { SampleData } from '../assets/SampleDataObj';

let sampleDataKeys = [
  "4 Player Game",
  "3 Player Game",
  "Game #3300452",
  "Game #3318160",
  "Game #3267464",//  TODO Fix errors in commented ones
  "Game #3270413",
  "Game #3341022",
  "Game #3342302"
];

class AnalyzerInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sampleDataOpened: false,
      sampleData: SampleData[sampleDataKeys[0]]
    };
    this.handleChangeSampleData = this.handleChangeSampleData.bind(this);
    this.handleSubmitSampleData = this.handleSubmitSampleData.bind(this);
  }

  handleChangeSampleData(e) {
    this.state.sampleData = SampleData[e.target.value];
  }

  handleSubmitSampleData(e) {
    e.target.value = this.state.sampleData;
    this.props.handleChangeFormInput(e);
    this.props.handleSubmitFormInput(e, this.state.sampleData);
  }

  handleClickDropdown(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="uk-float-right uk-margin-right" style={{paddingTop: '8px'}}>
        <button type="button" data-uk-toggle="target: #analyzeModal" className="uk-button uk-button-primary uk-height-1-1" onClick={this.handleSubmitSampleData}>Analyze</button>

<div id="analyzeModal" data-uk-modal="center: true">
    <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
        <div className="uk-modal-header">
            <h2 className="uk-modal-title">Analyze Game</h2>
        </div>
        <div className="uk-modal-body">
            <textarea className="uk-textarea logInput" onChange={this.props.handleChangeFormInput} value={this.props.formInput}
              placeholder="Paste full game log here"></textarea>
            
        </div>
        <div className="uk-modal-footer uk-text-right">
            <button type="button" className="uk-button uk-button-secondary">Check it out with sample data</button>
            <div data-uk-dropdown="mode: click">
              <div onClick={this.handleClickDropdown}>
                <select className="uk-select" onChange={this.handleChangeSampleData}>
                    { sampleDataKeys.map(key => <option key={key} value={key}>{key}</option>) }
                </select>
                <button type="submit" className="uk-button uk-button-primary uk-margin-small-left uk-height-1-1" onClick={this.handleSubmitSampleData}>Analyze Sample Data</button>
              </div>
            </div>
            <button className="uk-button uk-button-primary uk-margin-small-left uk-modal-close" type="button" onClick={this.props.handleSubmitFormInput}>Analyze</button>
        </div>
    </div>
</div>

      </div>
    );
  }
}

export default AnalyzerInput;