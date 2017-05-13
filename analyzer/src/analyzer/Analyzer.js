import React, { Component } from 'react';
import 'whatwg-fetch';
import CopyToClipboard from 'react-copy-to-clipboard';

import PlayerGrid from './playerGrid/PlayerGrid';

import './Analyzer.css';

class Analyzer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.setCopied = this.setCopied.bind(this);
    this.resetCopied = this.resetCopied.bind(this);
  }

  setCopied() {
    this.setState({ copied: true });
  }

  resetCopied() {
    this.setState({ copied: false });
  }

  componentWillMount() {
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
          this.props.setStateGdo(data);
        });
      });
    }
  }

  render() {
    if (! this.props.gdo) {
      return null;
    }
    let shareUrl = 'http://windominion.com/' + this.props.gdo.key;

    return (
      <div data-uk-grid className='uk-grid-collapse uk-width-1-1'>
        <div className="uk-background-secondary uk-width-1-1 uk-grid-collapse" data-uk-grid>
          <div className="uk-width-1-2">
            <h3 className="uk-margin-left">Analyzing Game: {this.props.gdo.game}</h3>
          </div>
          <div className="uk-width-1-2 uk-text-right">
            <span data-uk-icon="icon: social" className="uk-margin-small-right icon-link icon-link-pad-top" data-uk-toggle="target: #shareModal" onClick={this.resetCopied} />
            <span data-uk-icon="icon: cog" className="uk-margin-right icon-link icon-link-pad-top" data-uk-toggle="target: #settingsOffcanvas" />
          </div>
        </div>
        <PlayerGrid gdo={this.props.gdo} />

<div id="shareModal" data-uk-modal="center: true">
    <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
        <div className="uk-modal-header">
            <h2 className="uk-modal-title">Share</h2>
        </div>
        <div className="uk-modal-body">
          
          <p>
            You can bookmark this page to save the game analysis, or copy the URL to share with friends. Please help spread the word!
          </p>
          <div data-uk-grid className="uk-grid-collapse copyText" style={{backgroundColor: '#4a4a4a', padding: '5px 10px'}}>
            <div className="uk-width-3-4">
              {shareUrl}
            </div>
            <div className="uk-width-1-4 uk-text-right">
              <CopyToClipboard text={shareUrl}
                onCopy={this.setCopied}>
                <span data-uk-icon="icon: copy" className="icon-link" />
              </CopyToClipboard>
              { this.state.copied ? <span className="uk-margin-small-left">Copied!</span> : '' }
            </div>
          </div>
            
        </div>
        <div className="uk-modal-footer uk-text-right">
            <button className="uk-button uk-button-secondary uk-margin-small-left uk-modal-close" type="button">Close</button>
        </div>
    </div>
</div>

      </div>
    );
  }
}

export default Analyzer;