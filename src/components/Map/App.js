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
      darkness: true,
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
        'hero': false,
        'hidden': true
      }
      var hero = this.state.hero.location;
      if (counter === hero) {
        current.hero = true;
      } else if (Math.random() > 0.95) {
        current.monster = true;
      } else if (Math.random() > 0.98) {
        current.potion = true;
      } else if (Math.random() > 0.99) {
        current.weapon = true;
      }
      if (counter === hero ||
          counter === hero + 1 ||
          counter === hero + 2 ||
          counter === hero + 3 ||
          counter === hero - 1 ||
          counter === hero - 2 ||
          counter === hero - 3 ||
          counter === hero + 72 ||
          counter === hero + 73 ||
          counter === hero + 74 ||
          counter === hero + 75 ||
          counter === hero + 76 ||
          counter === hero + 77 ||
          counter === hero + 78 ||
          counter === hero + 148 ||
          counter === hero + 149 ||
          counter === hero + 150 ||
          counter === hero + 151 ||
          counter === hero + 152 ||
          counter === hero + 224 ||
          counter === hero + 225 ||
          counter === hero + 226 ||
          counter === hero - 72 ||
          counter === hero - 73 ||
          counter === hero - 74 ||
          counter === hero - 75 ||
          counter === hero - 76 ||
          counter === hero - 77 ||
          counter === hero - 78 ||
          counter === hero - 148 ||
          counter === hero - 149 ||
          counter === hero - 150 ||
          counter === hero - 151 ||
          counter === hero - 152 ||
          counter === hero - 224 ||
          counter === hero - 225 ||
          counter === hero - 226) {
        current.hidden = false;
      }
      cells.push(current);
      counter++;
    }
    this.setState({cells: cells});

    // var _this = this;
    // var gameLoop = setInterval(() => {
    //   _this.moveMonsters();
    // }, 2000);
    // this.setState({gameLoop: gameLoop});
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


    // TEST FOR MONSTER MOVEMENT(7)
    if (e.keyCode === 55) {
      this.moveMonsters();
    }
  }

  // HANDLE MONSTER MOVEMENT
  moveMonsters() {
    var allCells = this.state.cells;
    var newCells = this.state.cells;
    allCells.forEach((cell) => {
      if (cell.monster) {
        var oldLocation = cell.id;
        var newLocation;
        var rand = Math.floor(Math.random()*5);
        if (rand === 0) { //UP
          newLocation = oldLocation - 75;
        } else if (rand === 1) { //DOWN
          newLocation = oldLocation + 75;
        } else if (rand === 2) { //RIGHT
          newLocation = oldLocation + 1;
        } else if (rand === 3) { //LEFT
          newLocation = oldLocation - 1;
        }
        if (oldLocation >= 0 && newLocation >= 0 && oldLocation <= 3749 && oldLocation <= 3749) {
          newCells[oldLocation].monster = false;
          newCells[newLocation].monster = true;
        }
      }
    });
    this.setState({cells: newCells});
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

    if (this.state.darkness) {
      allCells.forEach((cell) => {
        if (cell.id === newCell || cell.id === newCell + 1 || cell.id === newCell + 2 || cell.id === newCell + 3 || cell.id === newCell - 1 || cell.id === newCell - 2 || cell.id === newCell - 3 || cell.id === newCell + 75 || cell.id === newCell + 76 || cell.id === newCell + 77 || cell.id === newCell + 78 || cell.id === newCell + 74 || cell.id === newCell + 73 || cell.id === newCell + 72 || cell.id === newCell + 150 || cell.id === newCell + 151 || cell.id === newCell + 152 || cell.id === newCell + 149 || cell.id === newCell + 148 || cell.id === newCell + 224 || cell.id === newCell + 225 || cell.id === newCell + 226 || cell.id === newCell - 75 || cell.id === newCell - 76 || cell.id === newCell - 77 || cell.id === newCell - 78 || cell.id === newCell - 74 || cell.id === newCell - 73 || cell.id === newCell - 72 || cell.id === newCell - 150 || cell.id === newCell - 151 || cell.id === newCell - 152 || cell.id === newCell - 149 || cell.id === newCell - 148 || cell.id === newCell - 224 || cell.id === newCell - 225 || cell.id === newCell - 226) {
          cell.hidden = false;
        } else {
          cell.hidden = true;
        }
      });
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

  playGame(event) {
    event.stopPropagation();
    var _this = this;
    var gameLoop = setInterval(() => {
      _this.moveMonsters();
    }, 2000);
    this.setState({gameLoop: gameLoop});
  }

  pauseGame(event) {
    event.stopPropagation();
    var gameLoop = this.state.gameLoop;
    clearInterval(gameLoop);
  }

  toggleOverlay(event) {
    event.stopPropagation();
    var allCells = this.state.cells;
    var newValue = !this.state.darkness;
    allCells.forEach((cell) => {
      cell.hidden = newValue;
    });
    this.setState({cells: allCells});
    this.setState({darkness: newValue});
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
        <div className='btn' id='playBtn' onClick={this.playGame.bind(this)}>PLAY</div>
        <div className='btn' id='pauseBtn' onClick={this.pauseGame.bind(this)}>PAUSE</div>
        <div className='btn' id='toggleOverlayBtn' onClick={this.toggleOverlay.bind(this)}>TOGGLE DARKNESS</div>
      </div>
    );
  }
}
