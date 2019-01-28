import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import ChromeExtIcon from '../assets/images/icon-16.jpg';

class Home extends Component {
    render() {
        return (
        <div data-uk-grid className='uk-grid-collapse uk-width-1-1'>
            <div className="uk-background-secondary uk-width-1-1 uk-grid-collapse" data-uk-grid>
                <div className="uk-width-1-1">
                    <h3 className="uk-margin-left">Visual and statistical post-game analysis for <a href="http://dominion.games" target="_blank">Dominion Online</a>.</h3>
                </div>
            </div>
            <article className="uk-article uk-padding">
                <h1 className="uk-article-title">
                    An essential tool for the Dominion expert.
                </h1>
                <p>
                    Where did you go wrong? Where did you go right? The answers are in your game log, but they aren't very easy to find.
                </p>
                <p>
                    Until now. Win Dominion parses your game log and provides a beautiful interface for post-game analysis. Drag the turn slider and visually watch the decks grow and shrink
                    as you "rewind" and "fast forward" through your game. View statistics about each deck's contents for each turn. Use the full potential of your game's data to fine tune your strategy.
                </p>
                <p className="uk-text-lead">
                    See sample games...
                </p>
                <ul>
                    <li><Link to="/sample-0">magicjj vs. Lord Rattington</Link></li>
                    <li><Link to="/sample-1">magicjj vs. Revenge Witch</Link></li>
                    <li><Link to="/sample-2">magicjj vs. Lord Voldebot vs. Bad Advisor</Link></li>
                </ul>
                <p className="uk-text-lead">
                    There are two ways to use Win Dominion:
                </p>
                <p className="p-list">
                    <span className="uk-float-left numbers" style={{marginTop: '0'}}>1</span>
                    Click the <button className="uk-button uk-button-primary no-pointer" type="button">Analyze</button> button in the top-right and corner of the page. Paste your entire game log into the box, and click <button className="uk-button uk-button-primary no-pointer" type="button">Analyze</button> again.
                </p>
                <p className="p-list">
                    <span className="uk-float-left numbers">2</span>
                    <b>Recommended:</b> Install the <a href="https://chrome.google.com/webstore/detail/win-dominion-game-scraper/denlafhecndjbofgefekklidcpannapm" target="_blank">Chrome extension</a>. 
                    After playing a game, just click the <img src={ChromeExtIcon} style={{width: '16px', height: '16px', marginTop: '-3px'}} /> icon and your analysis will automatically open in a new tab!
                </p>
                <p>
                    <span className="uk-badge uk-background-danger uk-margin-small-right">Note</span> 
                    Using the Chrome extension is <i>highly</i> recommended. It sends Win Dominion more data about your game, giving you a more accurate analysis and helping us further refine this software. 
                    VP Tokens, Landmarks and more are only considered when using the Chrome extension.
                </p>
                <h1 className="uk-article-title">
                    Support Win Dominion
                </h1>
                <p>
                    Win Dominion is a one-man project. It is running on a paid dedicated server, and currently has no ads.
                    Please consider donating to keep this tool online and support further development. 
                    You can also support the project by sharing it with your friends and opponents. Click the <span data-uk-icon="icon: social" /> in the top-right corner after analyzing a game
                    to share the analysis.
                </p>
                <div className="uk-text-center">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="J3YPY6J5CA3E8" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" data-border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    </form>
                </div>
                <h1 className="uk-article-title">
                    Issues? Feature request?
                </h1>
                <p>
                    Contact the developer on our <a href="https://discordapp.com/channels/316560992102383616/316560992102383616" target="_blank">Discord channel</a>.
                    Please keep me notified of any outages, or any questions at all!
                </p>
            </article>
        </div>
        );
    }
}

export default Home;