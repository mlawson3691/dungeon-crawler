import React, { Component } from 'react';
import './App.css';

export default class GameOver extends Component {

  componentDidMount() {
    var _this = this;
    setTimeout(() => {
      _this.refs.gameOver.style.opacity = 1;
    }, 500);
  }

  playAgain(event) {
    event.stopPropagation();
    this.props.playAgain();
  }

  render() {
    return (
      <div ref={'gameOver'} id='gameOver'>
        {this.props.win ? (
          <div>You successfully defeated the Evil Enchantress and escaped from the woods!</div>
        ) : (
          <div>Oh no! The forest was too much for you to handle!</div>
        )}
        <div id='playAgainBtn' onClick={this.playAgain.bind(this)}>Play Again?</div>
      </div>
    );
  }
}
