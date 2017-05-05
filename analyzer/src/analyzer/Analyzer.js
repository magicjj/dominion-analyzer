import React, { Component } from 'react';
import 'whatwg-fetch';

import PlayerGrid from './playerGrid/PlayerGrid';

import './Analyzer.css';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Button from 'react-uikit-button';
import Form from 'react-uikit-form';
import Panel from 'react-uikit-panel';

class Analyzer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid col="1-1" gutter="collapse">
        { (this.props.gdo) ? 
          <Panel col="1-1" className="Analyzer">
            <div className="uk-background-secondary">
              <h3 className="textWhite">Analyzing Game: {this.props.gdo.game}</h3>
            </div>
            <PlayerGrid gdo={this.props.gdo} />
          </Panel> : ''
        }
      </Grid>
    );
  }
}

export default Analyzer;