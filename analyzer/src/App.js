import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Analyzer from './analyzer/Analyzer';
import AnalyzerInput from './analyzerInput/AnalyzerInput';
import PlayerGridSettings from './playerGridSettings/PlayerGridSettings';

import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: '',
      cardSize: 'large',
      cardView: 'square'
    };
    this.handleChangeFormInput = this.handleChangeFormInput.bind(this);
    this.handleSubmitFormInput = this.handleSubmitFormInput.bind(this);
    this.handleChangeSetting = this.handleChangeSetting.bind(this);
    this.setStateGdo = this.setStateGdo.bind(this);
  }

  handleChangeFormInput(e) {
    this.setState({ formInput: e.target.value });
  }

  handleSubmitFormInput(e, formInput) {
    e.preventDefault();
    formInput = typeof formInput === 'string' ? formInput : this.state.formInput;
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
        data.resetTurn = true;
        this.setStateGdo(data);
      });
    });
  }
  
  handleChangeSetting(e) {
    console.log(e.target.name + " = " + e.target.value);
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  setStateGdo(data) {
    this.setState({gdo: data});
    if (data.key) {
      this.props.history.push("/" + data.key);
    }
  }

  render() {
    // TODO why doesn't context="primary" work instead of this classname?
    return (
      <MuiThemeProvider>
        <div className="uk-offcanvas-content">

            <div data-uk-grid className='uk-width-1-1 uk-child-width-1-1 uk-grid-collapse'>
              <div data-uk-grid className="uk-background-primary uk-grid-collapse">
                <div className="uk-width-5-6 uk-padding-small">
                  <h1 className="header-font uk-display-inline uk-margin-small-left">Win Dominion </h1><h2 className="uk-display-inline">Game Analyzer</h2>
                </div>
                <div className="uk-width-1-6">
                  <AnalyzerInput
                    formInput={this.state.formInput} 
                    handleSubmitFormInput={this.handleSubmitFormInput} 
                    handleChangeFormInput={this.handleChangeFormInput}
                  />
                </div>
              </div>
              <div data-uk-grid className={'uk-grid-collapse uk-width-1-1 cardSize-' + this.state.cardSize + ' cardView-' + this.state.cardView}>
                <Switch>
                  <Route path='/:key?' render={(props) => <Analyzer gdo={this.state.gdo} setStateGdo={this.setStateGdo} {...props} />} />
                </Switch>
              </div>
            </div>

            <div id="settingsOffcanvas" data-uk-offcanvas="flip: true">
                <div className="uk-offcanvas-bar">

                    <button className="uk-offcanvas-close" type="button" data-uk-close></button>

                    <h3>Settings</h3>
                    <PlayerGridSettings handleChangeSetting={this.handleChangeSetting} cardSize={this.state.cardSize} cardView={this.state.cardView} />

                </div>
            </div>
        </div>

        
      </MuiThemeProvider>
    );
  }
}

export default App;
