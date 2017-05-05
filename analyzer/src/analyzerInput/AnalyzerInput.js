import React, { Component } from 'react';

import './AnalyzerInput.css';

import Button from 'react-uikit-button';
import Grid from 'react-uikit-grid';
import Block from 'react-uikit-block';

class AnalyzerInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="uk-align-right">
        <Block>
          <textarea value={this.props.formInput} onChange={this.props.handleChangeFormInput}></textarea>
          <Button type="submit" body="Go" context="success" onClick={this.props.handleSubmitFormInput} />
        </Block>
      </Grid>
    );
  }
}

export default AnalyzerInput;