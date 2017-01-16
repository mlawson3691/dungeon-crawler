import React, { Component } from 'react';
import './App.css';

export default class Cell extends Component {

  alert(event) {
    event.stopPropagation();
    console.log(this.props.cell.id);
  }

  render() {
    var classTitle;
    if (this.props.cell.hero) {
      classTitle = 'cell hero';
    } else if (this.props.cell.wall) {
      classTitle = 'cell wall';
    } else if (this.props.cell.monster) {
      classTitle = 'cell monster' + this.props.cell.monsterType;
    } else if (this.props.cell.potion) {
      classTitle = 'cell potion';
    } else if (this.props.cell.weapon) {
      classTitle = 'cell weapon';
    } else {
      classTitle = 'cell';
    }
    if (this.props.cell.hidden) {
      classTitle += ' hidden';
    }
    return (
      <div className={classTitle} onClick={this.alert.bind(this)}></div>
    );
  }
}
