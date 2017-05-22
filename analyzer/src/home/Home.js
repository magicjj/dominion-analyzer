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
                    <li><Link to="/yczCerB">magicjj vs. aprilelaine</Link></li>
                    <li><Link to="/Hfvaqjy">magicjj vs. Lord Rattington</Link></li>
                    <li><Link to="/ig4umGh">magicjj vs. DerpButter vs. Lord Rattington</Link></li>
                </ul>
                <p className="uk-text-lead">
                    There are two ways to use Win Dominion:
                </p>
                <p>
                    <span className="uk-float-left numbers" style={{marginTop: '0'}}>1</span>
                    Click the <button className="uk-button uk-button-primary no-pointer" type="button">Analyze</button> button in the top-right and corner of the page. Paste your entire game log into the box, and click <button className="uk-button uk-button-primary no-pointer" type="button">Analyze</button> again.
                </p>
                <p>
                    <span className="uk-float-left numbers">2</span>
                    To speed things up and avoid manually copying and pasting the game log, install the <a href="https://chrome.google.com/webstore/detail/win-dominion-game-scraper/denlafhecndjbofgefekklidcpannapm" target="_blank">Chrome extension</a> here. 
                    After playing a game, just click the <img src={ChromeExtIcon} style={{width: '16px', height: '16px', marginTop: '-3px'}} /> icon and your analysis will automatically open in a new tab!
                </p>
                <h1 className="uk-article-title">
                    Support Win Dominion
                </h1>
                <p>
                    Win Dominion is currently a one-man project. If you'd like to the tool get new features, such as live analysis mid-game and more, please consider donating.
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
                    Note
                </h1>
                <p>
                    This project is currently hosted from my personal internet connection. Expect downtime and delays. I will move it to dedicated hosting as soon as demand and/or donations allow it.
                </p>
                <p>
                    Bugs? Feature request? Log an issue on <a href="https://github.com/magicjj/dominion-analyzer/issues" target="_blank">GitHub</a>.
                </p>
            </article>
        </div>
        );
    }
}

export default Home;