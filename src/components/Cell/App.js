import React, { Component } from 'react';
import './App.css';

export default class Cell extends Component {

  render() {
    var classTitle;
    if (this.props.cell.hero) {
      if (this.props.direction === 'up') {
        classTitle = 'cell hero heroUp';
      } else if (this.props.direction === 'down') {
        classTitle = 'cell hero heroDown';
      } else if (this.props.direction === 'right') {
        classTitle = 'cell hero heroRight';
      } else if (this.props.direction === 'left') {
        classTitle = 'cell hero heroLeft';
      }
    } else if (this.props.cell.wall) {
      classTitle = 'cell wall';
    } else if (this.props.cell.road1) {
      classTitle = 'cell road road1';
    } else if (this.props.cell.road3) {
      classTitle = 'cell road road3';
    } else if (this.props.cell.road) {
      classTitle = 'cell road';
    } else if (this.props.cell.bossImg) {
      classTitle = 'cell boss bossImg';
    } else if (this.props.cell.boss) {
      classTitle = 'cell boss';
    } else if (this.props.cell.monster) {
      classTitle = 'cell monster' + this.props.cell.monsterType;
    } else if (this.props.cell.potion) {
      classTitle = 'cell potion';
    } else if (this.props.cell.weapon) {
      classTitle = 'cell weapon';
    } else {
      classTitle = 'cell';
    }
    return (
      <div className={classTitle}></div>
    );
  }
}
