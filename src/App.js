import React, { Component } from 'react';
import './App.css';
import Map from './components/Map/App.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Wyrd Woods</h2>
        </div>
        <Map />
      </div>
    );
  }
}
