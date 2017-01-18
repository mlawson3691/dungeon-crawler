import React, { Component } from 'react';
import './App.css';

export default class ShadowCell extends Component {

  alert(event) {
    event.stopPropagation();
    console.log(this.props.cell.id);
  }

  render() {
    var classTitle;
    if (this.props.cell.shadow || this.props.gameOver) {
      classTitle = 'cell shadowCell';
    } else {
      classTitle = 'cell'
    }
    return (
      <div id={this.props.cell.id} className={classTitle} onClick={this.alert.bind(this)}></div>
    );
  }
}
