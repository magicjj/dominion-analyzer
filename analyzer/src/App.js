import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Analyzer from './analyzer/Analyzer';
import AnalyzerInput from './analyzerInput/AnalyzerInput';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { TestData1 } from './assets/testdata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: TestData1
    };
    this.handleChangeFormInput = this.handleChangeFormInput.bind(this);
    this.handleSubmitFormInput = this.handleSubmitFormInput.bind(this);
  }

  handleChangeFormInput(e) {
    this.setState({ formInput: e.target.value });
  }

  handleSubmitFormInput(e) {
    e.preventDefault();
    console.log(this.state.formInput);
    fetch('http://localhost:8088/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: this.state.formInput
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
            <Block col='1-2'>
              <h2 className="textWhite">Dominion Game Analyzer</h2>
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
