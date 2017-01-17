import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';

export default class Sounds extends Component {

  render() {
    return <Sound
      url={this.state.soundUrl}
      playStatus={this.state.playStatus}
      playFromPosition={0}
      volume={100}
      onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
      onPlaying={({position}) => console.log(position)}
      onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})} />}
    />;
  }
}
