import React, { Component } from 'react';
import './App.css';
import Cell from './../Cell/App.js';
import HeroStats from './../HeroStats/App.js';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellCount: 3750,
      mapWidth: 75,
      cells: [],
      hero: {
        'level': 1,
        'xp': 0,
        'hp': 10,
        'weapon': 0,
        'location': 1949
      }
    };
  }

  // SETUP MAP
  componentDidMount() {
    var counter = 0;
    var cells = [];
    var current = {};
    while (counter < this.state.cellCount) {
      current = {
        'id': counter,
        'monster': false,
        'potion': false,
        'weapon': false,
        'hero': false
      }
      if (counter === this.state.hero.location) {
        current.hero = true;
      } else if (Math.random() > 0.95) {
        current.monster = true;
      } else if (Math.random() > 0.98) {
        current.potion = true;
      } else if (Math.random() > 0.99) {
        current.weapon = true;
      }
      cells.push(current);
      counter++;
    }
    this.setState({cells: cells});

    document.addEventListener('keyUp', this.handleKeyUp, true);
  }

  // LISTEN FOR KEY EVENTS
  handleKeyDown(e) {
    var updatedHero = this.state.hero;
    var location = updatedHero.location;
    var newLocation;
    if (e.keyCode === 38) { // UP
      newLocation = location - 75;
      this.moveHero(location, newLocation);
    } else if (e.keyCode === 40) { // DOWN
      newLocation = location + 75;
      this.moveHero(location, newLocation);
    } else if (e.keyCode === 39) { // RIGHT
      newLocation = location + 1;
      this.moveHero(location, newLocation);
    } else if (e.keyCode === 37) { // LEFT
      newLocation = location - 1;
      this.moveHero(location, newLocation);
    }
    updatedHero.location = newLocation;
    this.setState({hero: updatedHero});
  }

  // HANDLE MOVEMENT
  moveHero(oldCell, newCell) {
    var allCells = this.state.cells;
    allCells[oldCell].hero = false;
    allCells[newCell].hero = true;

    if (allCells[newCell].monster) {
      this.fight(newCell);
    }

    if (allCells[newCell].potion) {
      this.getHealth(newCell);
    }

    if (allCells[newCell].weapon) {
      this.getWeapon(newCell);
    }

    this.setState({cells: allCells});
  }

  // HANDLE COMBAT
  fight(location) {
    var hero = this.state.hero;
    hero.hp --;
    hero.xp += 10;
    if (hero.xp >= hero.level * 100) {
      this.levelUp();
    }
    var allCells = this.state.cells;
    allCells[location].monster = false;
    this.setState({hero: hero});
    this.setState({cells: allCells});
  }

  // HANDLE HEALTH SPOTS
  getHealth(location) {
    var hero = this.state.hero;
    if (hero.hp < 5) {
      hero.hp += 5;
    } else {
      hero.hp = 10;
    }
    var allCells = this.state.cells;
    allCells[location].potion = false;
    this.setState({hero: hero});
    this.setState({cells: allCells});
  }

  // HANDLE WEAPON UPGRADES
  getWeapon(location) {
    var hero = this.state.hero;
    hero.weapon ++;
    var allCells = this.state.cells;
    allCells[location].weapon = false;
    this.setState({hero: hero});
    this.setState({cells: allCells});
  }

  // HANDLE LEVELING UP
  levelUp() {
    var hero = this.state.hero;
    hero.level ++;
    hero.xp = 0;
    this.setState({hero: hero});
  }

  render() {
    return (
      <div>
        <div id='stats'>
          <HeroStats
            hero={this.state.hero}
          />
        </div>
        <div id='board' tabIndex='0' onKeyDown={this.handleKeyDown.bind(this)}>
          {this.state.cells.map((thisCell, index) => {
            return (
              <Cell
                key={index}
                id={index}
                cell={thisCell}
                cells={this.state.cells}
              />
            );
          }, this)}
        </div>
      </div>
    );
  }
}
