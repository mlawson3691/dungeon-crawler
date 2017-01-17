import React, { Component } from 'react';
import './App.css';

export default class HeroStats extends Component {

  render() {
    var weapon = 'Bare Fists';
    if (this.props.hero.weapon >= 16) {
      weapon = 'Greatstaff of Flame';
    } else if (this.props.hero.weapon >= 14) {
      weapon = 'Staff of Wind';
    } else if (this.props.hero.weapon >= 12) {
      weapon = 'Wand of Ice';
    } else if (this.props.hero.weapon >= 10) {
      weapon = 'Gilded Greatsword';
    } else if (this.props.hero.weapon >= 8) {
      weapon = 'Jeweled Mace';
    } else if (this.props.hero.weapon >= 6) {
      weapon = 'Bloody Axe';
    } else if (this.props.hero.weapon >= 4) {
      weapon = 'Shiny Shortsword';
    } else if (this.props.hero.weapon >= 2) {
      weapon = 'Rusty Dagger';
    }

    var hpPercent = (this.props.hero.hp / 10 * 200) + 'px';
    var hpStyle = {
      width: hpPercent
    }

    var xpPercent = (this.props.hero.xp / 100 * 200) + 'px';
    var xpStyle = {
      width: xpPercent
    }

    return (
      <div id='stats'>
        <div className='left'>
          <div id='experience'>
            <div id='xp-label'>XP: </div>
            <div id='xp-bar'>
              <div style={xpStyle} id='xp-bar-inner'>
                {/*<div>{this.props.hero.xp} / {100 * this.props.hero.level}</div>*/}
              </div>
            </div>
          </div>
          <div id='level'>Level: {this.props.hero.level}</div>
          <div id='health'>
            <div id='hp-label'>HP: </div>
            <div id='hp-bar'>
              <div style={hpStyle} id='hp-bar-inner'>
                {/*<div>{this.props.hero.hp} / 10</div>*/}
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div id='weapon'>Weapon: {weapon}</div>
          <div id='damage'>Damage: {this.props.hero.level + this.props.hero.weapon}</div>
        </div>
        <div id='message'>
          {this.props.message}
        </div>
      </div>
    );
  }
}
