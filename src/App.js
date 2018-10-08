import React, { Component } from 'react';

import './App.css';
import { generateRectMap } from './mapHelpers/mapGenerators'
import HexTile from './components/HexTile'

let xvalue = 4;
let yvalue = 4;

let map = generateRectMap(xvalue, yvalue)



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      map: {},
      xvalue: 0,
      yvalue: 5
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.xChange = this.xChange.bind(this);
    this.yChange = this.yChange.bind(this);
  };


  xChange(event) {
    this.setState({
      xvalue: event.target.value
    })
  }

  yChange(event) {
    this.setState({
      yvalue: event.target.value
    })
  }

  clickHandler() {
    this.state.map = generateRectMap(this.state.xvalue, this.state.yvalue)

  };
  render() {
    return (
      <div className="App">
      <p>xvalue</p><input onChange={this.xChange}></input><p>yvalue</p><input onChange={this.yChange}></input>
      <button onClick={this.clickHandler}>Button</button>
        <div className="map-container">
          <svg viewBox={`0 0 ${window.innerWidth + 500} ${window.innerHeight + 2500}`}>
            <g transform="rotate(-30) translate(0, 270)">
              <g className="grid">
                {Object.keys(this.state.map).map((coords, tile) => {
                  const q = this.state.map[coords].q
                  const r = this.state.map[coords].r
                  const qPos = this.state.map[coords].qPos
                  const rPos = this.state.map[coords].rPos
                  const offset = 60;

                  return <g key={`${q}${r}`} transform={`translate(${q * 105},${r * 120 + (offset * q)})`}><HexTile q={q} r={r} /></g>
                })}
              </g>
            </g>
          </svg>
        </div>

      </div>
    );
  }
}



export default App;
