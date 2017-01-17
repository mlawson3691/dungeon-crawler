import React, { Component } from 'react';
import ShadowCell from './../ShadowCell/App.js';
import './App.css';

export default class Shadow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      cellCount: 620, //hero center = 263
      visibleCells: [138,139,140,168,169,170,171,172,198,199,200,201,202,203,204,228,229,230,231,232,233,234,235,236,259,260,261,262,263,264,265,266,267,290,291,292,293,294,295,296,297,298,322,323,324,325,326,327,328,354,355,356,357,358, 386,387,388]
      // visibleCells: [79,80,81,153,154,155,156,157,227,228,229,230,231,232,233,301,302,303,304,305,306,307,308,309,376,377,378,379,380,381,382,383,384,451,452,453,454,455,456,457,458,459,527,528,529,530,531,532,533,603,604,605,606,607,679,680,681],
    };
  }
  // this.props.cellCount
  // this.props.mapWidth
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
            />
          );
        }, this)}
      </div>
    );
  }
}
