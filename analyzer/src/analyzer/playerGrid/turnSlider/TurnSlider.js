import React, { Component } from 'react';

import Slider from 'material-ui/Slider';

import { ResponsiveContainer, ComposedChart, LineChart, Line, Bar, Area, XAxis, YAxis,
  ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush } from 'recharts';

class TurnSlider extends Component {

  constructor(props) {
    super(props);
  }

  getChartData(gdo) {
    let ret = [];
    for (let turnIndex = 0; turnIndex < gdo.players[0].turns.length; turnIndex++) {
      let turnData = { name: "Turn " + turnIndex };
      for (let playerIndex = 0; playerIndex < gdo.players.length; playerIndex++) {
        let vp = 0;
        try {
          // todo clean up longass thing that sums the victory points
          vp = gdo.players[playerIndex].turns[turnIndex].points.vp;
        } catch (e) {
          // assume it's 0
        }
        turnData[gdo.players[playerIndex].name] = vp;
      }
      ret.push(turnData);
    }
    return ret;
  }
  
  render() {
    return (
      <div className="uk-width-1-1 uk-card uk-card-body uk-background-muted" style={{marginLeft:'20px'}}>
        <h3 className="uk-card-title">Select a turn:</h3>
        <Slider defaultValue={0} min={0} max={this.props.numberOfTurns-1} step={1} value={this.props.turn} onChange={this.props.handleChangeTurn} />
        <LineChart width={730} height={250} data={this.getChartData(this.props.gdo)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          { this.props.gdo.players.map(player => <Line type="monotone" dataKey={player.name} stroke="#8884d8" />) }
        </LineChart>
      </div>
    );
  }
  
}

export default TurnSlider;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />