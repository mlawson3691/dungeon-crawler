import React, { Component } from 'react';
import ShadowCell from './../ShadowCell/App.js';
import './App.css';

export default class Shadow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      cellCount: 620,
      visibleCells: [138,139,140,168,169,170,171,172,198,199,200,201,202,203,204,228,229,230,231,232,233,234,235,236,259,260,261,262,263,264,265,266,267,290,291,292,293,294,295,296,297,298,322,323,324,325,326,327,328,354,355,356,357,358, 386,387,388]
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

      if (this.state.visibleCells.indexOf(counter) >= 0) {
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
