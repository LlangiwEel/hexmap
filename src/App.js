import React, { Component } from 'react';
import './App.css';




const MapGenForm = () => {
  return (<div><svg><polygon className="redhex" points="60,26 45,52 15,52 0,26 15,0 45,0"></polygon></svg></div>);
};

const ActMap = () => {
  return (<div><svg><polygon className="hex" points="60,26 45,52 15,52 0,26 15,0 45,0"></polygon></svg></div>);
}

class HexTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMap: true
    }
  }

  render() {
    return (
      this.state.hasMap ? <ActMap /> : <MapGenForm />
  );
};
}

const GridColumn = () => {
  return (
    <div id="GridColumn">
      <HexTile />
      <HexTile />
      <HexTile />
      <HexTile />
      <HexTile />
      <HexTile />
      <HexTile />
      <HexTile />
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
    <GridColumn />
    <GridColumn />
    <GridColumn />
    <GridColumn />
    <GridColumn />
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
