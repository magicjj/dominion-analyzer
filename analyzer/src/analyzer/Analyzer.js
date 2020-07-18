import React, { Component } from 'react';
import AnalyzerService from '../shared/AnalyzerService';
import 'whatwg-fetch';
import UIkit from 'uikit';
import { Redirect } from 'react-router-dom';
import SampleGames from '../assets/SampleGames' 

import PlayerGrid from './playerGrid/PlayerGrid';

import './Analyzer.css';

class Analyzer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      gdo: props.gdo
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
    let urlKey = this.props.match.params.key;
    let approvedUrlKeys = ["analyze", "sample-0", "sample-1", "sample-2"];
    if (approvedUrlKeys.indexOf(urlKey) === -1) {
      UIkit.modal.alert('Sorry, we no longer save analyzed games. The costs outweighed the donations - of literally $0. :(');
      /*
      let gdoKey;
      if (this.state.gdo) {
        gdoKey = this.state.gdo.key;
      } else {
        gdoKey = "";
      }
      if (this.props.match.params.key && gdoKey !== this.props.match.params.key) {
      AnalyzerService.getSavedAnalysis(this.props.match.params.key)
        .then(resp => {
            if (resp.status === 404) {
              UIkit.modal.alert('The game key you requested could not be retrieved. If this is an old key, the data may have been purged. Otherwise, if the problem persists, please contact the developer on our <a href="https://discordapp.com/channels/316560992102383616/316560992102383616" target="_blank">Discord channel</a>.');
              return;
            }
            if (resp.status === 500) {
              UIkit.modal.alert('An error occured while retrieving your game data. Try again in a few minutes. If the problem persists, please contact the developer on our <a href="https://discordapp.com/channels/316560992102383616/316560992102383616" target="_blank">Discord channel</a>.');
              return;
            }
            resp.json().then(data => {
              this.props.setStateGdo(data.gameData);
              this.props.handleChangeFormInput({ target: { value: data.gameLog }});
            });
        })
      ;
      */
    }

    if (urlKey.indexOf("sample-") === 0) {
      let sampleIndex = parseInt(urlKey.split("-")[1]);
      let sampleGame = SampleGames[sampleIndex];
      this.setState({ gdo: AnalyzerService.analyze(sampleGame) });
    }
  }

  render() {
    if (! this.state.gdo) {
      return <Redirect to="/" />;
    }

    return (
      <div data-uk-grid className='uk-grid-collapse uk-width-1-1'>
        <div className="uk-background-secondary uk-width-1-1 uk-grid-collapse" data-uk-grid>
          <div className="uk-width-1-2">
            <h3 className="uk-margin-left">Analyzing Game: {this.state.gdo.game}</h3>
          </div>
          <div className="uk-width-1-2 uk-text-right">
            <span data-uk-icon="icon: social" className="uk-margin-small-right icon-link icon-link-pad-top" data-uk-toggle="target: #shareModal" onClick={this.resetCopied} />
            <span data-uk-icon="icon: cog" className="uk-margin-right icon-link icon-link-pad-top" data-uk-toggle="target: #settingsOffcanvas" />
          </div>
        </div>
        <PlayerGrid gdo={this.state.gdo} />

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
          
          <p>
            UPDATE: Sorry, this functionality is disabled. We no longer save analyzed games. The costs outweighed the donations - of literally $0. :(
          </p>
            
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


/* 
Copy/paste code for shared games
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
*/
export default Analyzer;