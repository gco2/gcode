import React from 'react';
import * as Tone from 'tone';


class AudioEffects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

    this.updatePitch = this.updatePitch.bind(this);
    this.updateDistortion = this.updateDistortion.bind(this);
    this.updateDelay = this.updateDelay.bind(this);
  }

  componentDidMount (props) {
    //let _this = this;    
  }

  componentWillUnmount() {

  }

  updatePitch = (e) => {    
    this.props.audio.current.state.pitch.pitch = parseFloat(e.target.value);
    // console.log(this.props.audio.current.state.pitch.pitch)
  }

  updateDistortion = (e) => {
    this.props.audio.current.state.distortion.distortion = parseFloat(e.target.value)
  }

  updateDelay = (e) => {
    this.props.audio.current.state.delay.delayTime.value = parseFloat(e.target.value)
  }

  render() {
    return (
      <div id="audio-effects">
        <input type="range" id="pitch" label="Pitch" min="0.0" max="24.0" defaultValue="0.0" value={this.state.value} step="0.5"  units="hz" onChange={this.updatePitch} />
        <input type="range" id="distortion" label="Distortion" min="0.0" max="1.0" defaultValue="0.0" value={this.state.value} step="0.01"  units="dB" onChange={this.updateDistortion} />
        <input type="range" id="delay" label="Delay" min="0.0" max="1.0" defaultValue="0.0" value={this.state.value} step="0.01"  units="ms" onChange={this.updateDelay} />
      </div>
    );
  }
}

export default AudioEffects;
