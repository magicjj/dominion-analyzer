import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Analyzer from './analyzer/Analyzer';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    // TODO why doesn't context="primary" work instead of this classname?
    return (
      <MuiThemeProvider>
        <Grid>
          <Block col='1-1' className="uk-background-primary"> 
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Dominion Game Analyzer</h2>
          </Block>
          <Analyzer col='1-1' />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
