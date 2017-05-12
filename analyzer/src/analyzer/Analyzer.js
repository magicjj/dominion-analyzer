import React, { Component } from 'react';
import 'whatwg-fetch';

import PlayerGrid from './playerGrid/PlayerGrid';

import './Analyzer.css';

class Analyzer extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS 1")
    console.log(props);

    if (this.props.match.params.key) {
      fetch('http://magicjj.hopto.org:8088/getSavedAnalysis/' + encodeURIComponent(this.props.match.params.key), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => {
        resp.json()
        .then(data => {
          props.setStateGdo(data);
        });
      });
    }
  }

  render() {
    // this.props.match.params.key
    if (! this.props.gdo) {
      return null;
    }

    return (
      <div data-uk-grid className='uk-grid-collapse uk-width-1-1'>
        <section className="uk-background-secondary uk-width-1-1">
          <h3 className="uk-margin-left">Analyzing Game: {this.props.gdo.game} 
          </h3>
        </section>
        <PlayerGrid gdo={this.props.gdo} />
      </div>
    );
  }
}

export default Analyzer;