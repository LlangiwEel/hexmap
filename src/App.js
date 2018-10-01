import React, { Component } from 'react';

import './App.css';
import { generateRectMap } from './mapHelpers/mapGenerators'
import HexTile from './components/HexTile'

// const HexTile = () => {
//   return (
//     <div>
//     <svg><polygon className="hex" points="30,13 22.5,26 7.5,26 0,13 7.5,0 22.5,0"></polygon></svg>
//     </div>
//   );
// }

const GridColumn = () => {
  return (
    <div id="GridColumn">
      <HexTile />
      <HexTile />
      <HexTile />
    </div>
  )
}

const Grid = () => {
  return (
  <div id="Grid">
    <GridColumn />
    <GridColumn />
    <GridColumn />
  </div>
)
}

const map = generateRectMap(3, 3)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="map-container">
          <svg viewBox={`0 0 ${window.innerWidth + 500} ${window.innerHeight + 2500}`}>
            <g transform="rotate(-30) translate(0, 270)">
              <g className="grid">
                {Object.keys(map).map((coords, tile) => {
                  const q = map[coords].q
                  const r = map[coords].r
                  const qPos = map[coords].qPos
                  const rPos = map[coords].rPos
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
