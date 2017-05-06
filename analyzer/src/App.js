import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Analyzer from './analyzer/Analyzer';
import AnalyzerInput from './analyzerInput/AnalyzerInput';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as TestData1 from './assets/sampleData/data6.txt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: null
    };
    this.handleChangeFormInput = this.handleChangeFormInput.bind(this);
    this.handleSubmitFormInput = this.handleSubmitFormInput.bind(this);
  }

  handleChangeFormInput(e) {
    this.setState({ formInput: e.target.value });
  }

  handleSubmitFormInput(e, formInput) {
    e.preventDefault();
    formInput = formInput ? formInput : this.state.formInput;
    console.log(formInput);
    fetch('http://magicjj.hopto.org:8088/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: formInput
      })
    })
    .then(resp => {
      resp.json()
      .then(data => {
        this.setState({ gdo: data });
      });
    });
  }

  render() {
    // TODO why doesn't context="primary" work instead of this classname?
    return (
      <MuiThemeProvider>
        <Grid widths='1-1' col='1-1' gutter="collapse">
          <Grid col='1-1' gutter="collapse" match className="uk-background-primary">
            <Block col='1-2' className="uk-padding-small">
              <h1 className="header-font uk-display-inline uk-margin-small-left">Dominion </h1><h2 className="uk-display-inline">Game Analyzer</h2>
            </Block>
            <Block col='1-2'>
              <AnalyzerInput col='1-2' 
                formInput={this.state.formInput} 
                handleSubmitFormInput={this.handleSubmitFormInput} 
                handleChangeFormInput={this.handleChangeFormInput}
              />
            </Block>
          </Grid>
          <Grid col='1-1' gutter="collapse">
            <Analyzer col='1-1' gdo={this.state.gdo} />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
