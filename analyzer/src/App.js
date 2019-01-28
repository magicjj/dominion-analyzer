import React, { Component } from 'react';
import './App.css';
import * as service from './shared/AnalyzerService';
import Analyzer from './analyzer/Analyzer';
import Home from './home/Home';
import AnalyzerInput from './analyzerInput/AnalyzerInput';
import PlayerGridSettings from './playerGridSettings/PlayerGridSettings';

import { Switch, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UIkit from 'uikit';


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
    let gdo = service.default.analyze(formInput);
    if (gdo) {
      gdo.resetTurn = true;
      this.setStateGdo(gdo);
    } else {
      UIkit.modal.alert('An error occured while parsing your game data. Make sure your log is clean and try again. This app is no longer being maintained due to lack of donations (**no donations). But you can try contacting the developer on our <a href="https://discordapp.com/channels/316560992102383616/316560992102383616" target="_blank">Discord channel</a>.');
    }
    
  }
 /* old analyzer code -

    AnalyzerService.analyze(formInput)
      .then(resp => {
          if (resp.status === 500) {
            UIkit.modal.alert('An error occured while parsing your game data. Try again in a few minutes. If the problem persists, please contact the developer on our <a href="https://discordapp.com/channels/316560992102383616/316560992102383616" target="_blank">Discord channel</a>.');
            return;
          }
          resp.json().then(data => {
            if (data.finalScoresFromMetadata) {
              UIkit.modal.alert('Hmm... It looks like we calculated a different score than the Chrome Extension reported seeing. You can still check out the data, but the scores might be a little off. We\'ve notified the developer.');
            }
            data.resetTurn = true;
            this.setStateGdo(data);
          });
      })
    ;
 */
  handleChangeSetting(e) {
    console.log(e.target.name + " = " + e.target.value);
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  setStateGdo(data) {
    this.setState({gdo: data});
    let keyPath = "/" + data.key;
    // no longer saving games - overwrite this
    keyPath = "/analyze";
    if (data.key && this.props.history.location.pathname !== keyPath) {
      // only add an entry to browser history if we aren't already on that page
      this.props.history.push(keyPath);
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
                  <h1 className="header-font uk-display-inline uk-margin-small-left"><a href="/" className="headerLink">Win Dominion</a> </h1><h2 className="uk-display-inline">Game Analyzer</h2>
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
                  <Route path='/:key' render={(props) => <Analyzer gdo={this.state.gdo} handleChangeFormInput={this.handleChangeFormInput} setStateGdo={this.setStateGdo} {...props} />} />
                  <Route path='/' component={Home} />
                </Switch>
                {this.state.gdo !== undefined ?
                  <Redirect to="/analyze" />
                : null}
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
