import React, { Component } from 'react';
import 'whatwg-fetch';

import Grid from './grid/Grid';
import TestData from '../assets/testdata';

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
        this.setState({ gdo: JSON.parse(data) });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="formDiv">
          <form>
            <textarea value={this.state.formInput} onChange={this.handleChange}></textarea>
            <input type="submit" onClick={this.handleSubmit} />
          </form>
        </div>
        { (this.state.gdo) ? 
          <div className="Analyzer">
            <div className="Analyzer-header">
              <h2>Output</h2>
            </div>
            <Grid gdo={this.state.gdo} />
          </div> : ''
        }
      </div>
    );
  }
}

export default Analyzer;