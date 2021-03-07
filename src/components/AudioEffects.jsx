import React from 'react';
import * as Tone from 'tone';


class AudioEffects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pitch: 0.0,
      distortion: 0.0,
      delay: 0.0,
      reverb: 0.0
    };

    this.updatePitch = this.updatePitch.bind(this);
    this.updateDistortion = this.updateDistortion.bind(this);
    this.updateDelay = this.updateDelay.bind(this);
    this.updateReverb = this.updateReverb.bind(this);
  }

  componentDidMount (props) {
    //let _this = this;    
  }

  componentWillUnmount() {

  }

  updatePitch = (e) => {    
    let val = parseFloat(e.target.value);
    this.props.audio.current.state.pitch.pitch = val;
    // console.log(this.props.audio.current.state.pitch.pitch)

    this.setState({
      pitch: val
    })
  }

  updateDistortion = (e) => {
    let val = parseFloat(e.target.value);
    this.props.audio.current.state.distortion.distortion = val;

    this.setState({
      distortion: val
    })
  }

  updateDelay = (e) => {
    let val = parseFloat(e.target.value);
    this.props.audio.current.state.delay.delayTime.value = val;

    this.setState({
      delay: val
    })
  }

  updateReverb = (e) => {
    let val = parseFloat(e.target.value);
    this.props.audio.current.state.reverb.decay = val;

    this.setState({
      reverb: val
    })
  }

  render() {
    return (
      <div id="audio-effects">
        <div className="audio-effects-title">dsp</div>
        <div className="audio-effects-row">
          <div className="audio-fader">
            <input className="audio-effects-input" type="range" id="pitch" label="Pitch" min="0.0" max="24.0" defaultValue="0.0" value={this.state.value} step="0.01"  units="hz" onChange={this.updatePitch} />
            <label className="audio-effects-label">pitch {this.state.pitch}hz</label>
          </div>
          <div className="audio-fader">
            <input className="audio-effects-input" type="range" id="distortion" label="Distortion" min="0.0" max="1.0" defaultValue="0.0" value={this.state.value} step="0.01"  units="dB" onChange={this.updateDistortion} />
            <label className="audio-effects-label">noise {this.state.distortion}dB</label>
          </div>
        </div>
        <div className="audio-effects-row">
          <div className="audio-fader">
            <input className="audio-effects-input" type="range" id="delay" label="Delay" min="0.0" max="1.0" defaultValue="0.0" value={this.state.value} step="0.01"  units="ms" onChange={this.updateDelay} />
            <label className="audio-effects-label">delay {this.state.delay}ms</label>
          </div>
          <div className="audio-fader">
            <input className="audio-effects-input" type="range" id="reverb" label="reverb" min="0.001" max="10.0" defaultValue="0.01" value={this.state.value} step="0.1"  units="%" onChange={this.updateReverb} />
            <label className="audio-effects-label">reverb: {this.state.reverb}%</label>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioEffects;
