import React, { Component } from 'react';
import ShadowCell from './../ShadowCell/App.js';
import './App.css';

export default class Shadow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      cellCount: 620
    };
  }

  componentDidMount() {
    var cells = [];
    var counter = 0;
    var current = {};
    while (counter < this.state.cellCount) {
      current = {
        'id': counter,
        'shadow': true
      }

      if (this.props.visibleCells.indexOf(counter) >= 0) {
        current.shadow = false;
      }

      cells.push(current);
      counter++;
    }
    this.setState({cells: cells});
  }

  render() {
    return (
      <div id='shadow'>
        {this.state.cells.map((thisCell, index) => {
          return (
            <ShadowCell
              key={index}
              id={index}
              cell={thisCell}
              gameOver={this.props.gameOver}
            />
          );
        }, this)}
      </div>
    );
  }
}
