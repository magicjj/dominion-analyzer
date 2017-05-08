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
    if (! this.props.gdo) {
      return null;
    }

    return (
      <Grid col="1-1" gutter="collapse">
        <section className="uk-background-secondary uk-width-1-1">
          <h3 className="uk-margin-left">Analyzing Game: {this.props.gdo.game}</h3>
        </section>
        <PlayerGrid gdo={this.props.gdo} />
      </Grid>
    );
  }
}

export default Analyzer;