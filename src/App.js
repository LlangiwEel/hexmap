import React, { Component } from 'react';
import './App.css';


const HexTile = () => {
  return (
    <div>
    <svg><polygon className="hex" points="30,13 22.5,26 7.5,26 0,13 7.5,0 22.5,0"></polygon></svg>
    </div>
  );
}

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
  <div>
    <GridColumn />
    <GridColumn />
    <GridColumn />
  </div>
)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

export default App;
