import React, { Component } from 'react';
import './App.css';

export default class ShadowCell extends Component {

  render() {
    var classTitle;
    if (this.props.cell.shadow || this.props.gameOver) {
      classTitle = 'cell shadowCell';
    } else {
      classTitle = 'cell'
    }
    return (
      <div className={classTitle}></div>
    );
  }
}
