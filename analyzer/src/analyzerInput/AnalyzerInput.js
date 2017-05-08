import React, { Component } from 'react';
import $ from 'jquery';

import './AnalyzerInput.css';

import Button from 'react-uikit-button';
import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';

import Dropdown from 'react-uikit-dropdown';

import { SampleData } from '../assets/SampleDataObj';

let sampleDataKeys = [
 // "Game #3300452",
 // "Game #3318160",
  "Game #3270413",
 // "Game #3267464",  TODO Fix errors in commented ones
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
    this.closeSampleData($("#sampleDataDropdown .uk-dropdown")[0], false)
  }

  // TODO animate 
  openSampleData = (element, bool) => {
    this.setState({ sampleDataOpened : bool});
    //element.className = element.className + " uk-animation-fade";
    element.style.display = 'inline-block';
    element.style.visibility = 'visible';
  }

  closeSampleData = (element, bool) => {
    this.setState({ sampleDataOpened : bool});
    //element.className = element.className + " uk-animation-fade uk-animation-reverse";
    element.style.display = 'none';
    element.style.visibility = 'hidden';
  }

  handleClickDropdown(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <Grid className="uk-float-right uk-margin-right">
        <Block className="uk-padding-small">
          <textarea className="uk-textarea logInput" onChange={this.props.handleChangeFormInput} value={this.props.formInput}
            placeholder="Paste full game log here"></textarea>
          <Button type="submit" body="Analyze" className="uk-button-primary uk-margin-small-left uk-height-1-1" onClick={this.props.handleSubmitFormInput} />
          <Dropdown 
            id="sampleDataDropdown"
            className="uk-display-inline"
            opened={this.state.sampleDataOpened}
            margin='bottom'
            pos='bottom'
            trigger={{
              body:'Use Sample Data',
              className:"uk-button-secondary uk-margin-small-left uk-height-1-1 uk-width-auto",
              animate: {
                in: this.openSampleData,
                out: this.closeSampleData
              }
            }}
          >
          <div onClick={this.handleClickDropdown}>
            <select className="uk-select" onChange={this.handleChangeSampleData}>
                { sampleDataKeys.map(key => <option key={key} value={key}>{key}</option>) }
            </select>
            <Button type="submit" body="Analyze" className="uk-button-primary uk-margin-small-left uk-height-1-1" onClick={this.handleSubmitSampleData} />
          </div>
          </Dropdown>
        </Block>
      </Grid>
    );
  }
}

export default AnalyzerInput;