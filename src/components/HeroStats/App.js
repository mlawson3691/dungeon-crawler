import React, { Component } from 'react';
import './App.css';

export default class HeroStats extends Component {

  render() {
    var weapon = 'Bare Fists';
    if (this.props.hero.weapon >= 24) {
      weapon = 'Greatstaff of Flame';
    } else if (this.props.hero.weapon >= 21) {
      weapon = 'Staff of Wind';
    } else if (this.props.hero.weapon >= 18) {
      weapon = 'Wand of Ice';
    } else if (this.props.hero.weapon >= 15) {
      weapon = 'Gilded Greatsword';
    } else if (this.props.hero.weapon >= 12) {
      weapon = 'Jeweled Mace';
    } else if (this.props.hero.weapon >= 9) {
      weapon = 'Bloody Axe';
    } else if (this.props.hero.weapon >= 6) {
      weapon = 'Shiny Shortsword';
    } else if (this.props.hero.weapon >= 3) {
      weapon = 'Rusty Dagger';
    }

    return (
      <div id='stats'>
        <div id='level'>Level: {this.props.hero.level}</div>
        <div id='experience'>XP: {this.props.hero.xp} / {100 * this.props.hero.level}</div>
        <div id='health'>HP: {this.props.hero.hp} / 10</div>
        <div id='weapon'>Weapon: {weapon}</div>
        <div id='damage'>Damage: {this.props.hero.level + this.props.hero.weapon}</div>
      </div>
    );
  }
}
