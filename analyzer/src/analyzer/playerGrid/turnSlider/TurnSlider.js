import React, { Component } from 'react';

import "./TurnSlider.css";
import CardImages from '../../../assets/CardImages';

import Slider from 'material-ui/Slider';

import { ResponsiveContainer, ComposedChart, LineChart, Line, Bar, Area, XAxis, YAxis,
  ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush } from 'recharts';

class TurnSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animateLineChart: true
    };
    this.handleChangeTurn = this.handleChangeTurn.bind(this);
    this.handleMouseDownChart = this.handleMouseDownChart.bind(this);
    this.handleMouseMoveChart = this.handleMouseMoveChart.bind(this);
    this.handleMouseUpChart = this.handleMouseUpChart.bind(this);
  }

  dragging = false;

  handleChangeTurn(e, val) {
    this.handleMouseDownChart(null, val);;
  }

  handleMouseDownChart(e, turn) {
    if (e !== null && e.activeTooltipIndex) {
      this.dragging = true;
      turn = e.activeTooltipIndex;
      if (e.chartX <= 40) {
        // without this the handler isn't good about letting people select the  zero position
        turn = 0;
      }
    }
    this.setState({ animateLineChart: false });
    this.props.handleChangeTurn(null, turn);
  }

  handleMouseMoveChart(e) {
    if (this.dragging) {
      this.handleMouseDownChart(e);
    }
  }

  handleMouseUpChart(e) {
    this.dragging = false;
  }

  getChartData(gdo) {
    let ret = [];
    for (let turnIndex = 0; turnIndex < gdo.players[0].turns.length; turnIndex++) {
      let turnData = { name: "Turn " + turnIndex };
      for (let playerIndex = 0; playerIndex < gdo.players.length; playerIndex++) {
        let vp = 0;
        try {
          // todo clean up longass thing that sums the victory points
          vp = gdo.players[playerIndex].turns[turnIndex].totalPoints.vp;
        } catch (e) {
          // assume it's 0
        }
        turnData[gdo.players[playerIndex].name] = vp ? vp : 0;
      }
      ret.push(turnData);
    }
    return ret;
  }
  
  getTooltipContent = (e, b) => {
    // match e.label with data[x].name (yes I know it's stupid)
    let turnIndex;
    for (turnIndex = 0; turnIndex < this.props.gdo.players[0].turns.length; turnIndex++) {
      if (e.label === "Turn " + turnIndex) {
        break;
      }
    }

    let playerList = [];
    this.colorIndex = 0;
    for (let playerIndex = 0; playerIndex < this.props.gdo.players.length; playerIndex++) {
      let vp = 0;
      try {
        // todo clean up longass thing that sums the victory points
        vp = this.props.gdo.players[playerIndex].turns[turnIndex].totalPoints.vp;
      } catch (e) {
        // assume it's 0
      }
      vp = vp ? vp : 0;
      playerList.push(
        <div key={this.props.gdo.players[playerIndex].name} className="uk-grid uk-grid-collapse uk-width-1-1" style={{color: this.getColor()}}>
          <div className="uk-width-4-5">{this.props.gdo.players[playerIndex].name}</div>
          <div className="uk-width-1-5 uk-text-right">
            <div className="uk-grid uk-grid-collapse">
              <div className="uk-width-1-3"><img style={{width:'16px', height:'18px', marginRight:'20px'}} src={CardImages.VP_16px} /></div>
              <div className="uk-width-2-3 uk-text-right">{vp}</div>
            </div>
          </div>
        </div>
      )
    }
    return <div className="chart-tooltip uk-grid uk-grid-collapse">
      <h4>{e.label}</h4>
      {playerList}
    </div>;
  }

    // TODO color code winner and loserz
  colorList = ["#037da9", "#d3943c", "#68873c", "#e01c33"];
  colorIndex = 0;

  getColor = function() {
    return this.colorList[this.colorIndex++ % this.colorList.length];
  }



  render() {
    this.colorIndex = 0;
    return (
      <div className="uk-width-1-1 uk-card uk-card-small uk-card-body uk-background-muted" style={{marginLeft:'20px'}}>
        <h3 className="uk-card-title" style={{marginBottom:'0px'}}>Select a turn:</h3>
        <Slider defaultValue={0} min={0} max={this.props.numberOfTurns-1} step={1} value={this.props.turn} onChange={this.handleChangeTurn} className="slider" />
        <ResponsiveContainer height={180} width='100%'>
          <LineChart data={this.getChartData(this.props.gdo)}
            margin={{ top: 5, right: 5, left: -35, bottom: 5 }}
            onMouseMove={this.handleMouseMoveChart}
            onMouseDown={this.handleMouseDownChart}
            onMouseUp={this.handleMouseUpChart}
            onMouseLeave={this.handleMouseUpChart}  // TODO fix mouseout
            className="noselect"
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={this.getTooltipContent} />
            { this.props.gdo.players.map(player => <Line type="monotone" key={player.name} dataKey={player.name} stroke={this.getColor()} isAnimationActive={this.state.animateLineChart} />) }
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
}

export default TurnSlider;
//<input type="text" value={this.props.turn} onChange={this.props.handleChangeTurn} />