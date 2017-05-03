import React, { Component } from 'react';
import 'whatwg-fetch';

import PlayerGrid from './playerGrid/PlayerGrid';
import TestData from '../assets/testdata';

import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';
import Button from 'react-uikit-button';
import Form from 'react-uikit-form';
import Panel from 'react-uikit-panel';

class Analyzer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: TestData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ formInput: e.target.value });
  }

  handleChange(e) {
    this.setState({ formInput: e.target.value });
  }

  handleSubmit(e) {
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
    return (
      <Grid col="1-1">
        <Panel col="1-1">
          <form>
            <textarea value={this.state.formInput} onChange={this.handleChange}></textarea>
            <Button type="submit" body="Go" context="success" onClick={this.handleSubmit} />
          </form>
        </Panel>
        { (this.state.gdo) ? 
          <Panel col="1-1" className="Analyzer">
            <div className="Analyzer-header">
              <h2>Output</h2>
            </div>
            <PlayerGrid gdo={this.state.gdo} />
          </Panel> : ''
        }
      </Grid>
    );
  }
}

export default Analyzer;