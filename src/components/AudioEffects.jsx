import React from 'react';
import * as Tone from 'tone';


class AudioEffects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //audioContext: props.audio.context
    };

    this.setupEffects = this.setupEffects.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  componentDidMount (props) {
    //let _this = this;
    
    this.setupEffects(this.state.audioContext);
  }

  componentWillUnmount() {

  }

  setupEffects = (context) => {
    // Tone.setContext(context);

    // const disto = new Tone.Distortion(0.8).toDestination();


    // this.setState({
    //   dist: disto,
    //   panner: new Tone.AutoPanner({
    //     frequency: 4,
    //     depth: 1
    //   }).toDestination().start()
    // })
    
    //document.querySelector("#panner").addEventListener("input", (e) => panner.frequency.value = parseFloat(e.target.value));

    // const source = context.createMediaElementSource(this.state.player.current.audio.current)    
    // source.connect(context.destination);

    // this.state.player.current.audio.current.connect(this.state.dist);
    // this.state.dist.connect(context.destination);

    //Tone.setContext(context);
    //Tone.context.createMediaElementSource(this.state.player.current.audio.current)
    
    // const player = new Tone.Player(this.state.player.current.audio.current).toDestination();
    // player.autostart = true;
    // player.toDestination();
    // console.log(Tone)

  }

  handleChange = (e) => {
    //console.log(this.state.panner.frequency.value);

    //this.state.panner.frequency.value = parseFloat(e.target.value);
    
    //this.props.audio.current.state.gainNode.gain.value = parseFloat(e.target.value);
    
    this.props.audio.current.state.pitch.pitch = parseFloat(e.target.value);
    // console.log(this.props.audio.current.state.pitch.pitch)

    //this.props.audio.current.state.filter.frequency.value = parseFloat(e.target.value)
    //console.log(this.props.audio.current.state.filter.frequency.value)
  }

  handleChange2 = (e) => {

    this.props.audio.current.state.distortion.distortion = parseFloat(e.target.value)
    //console.log(this.props.audio.current.state.frequency.frequency.value)
  }

  handleChange3 = (e) => {

    //this.props.audio.current.state.filter.frequency.value = parseFloat(e.target.value)
    //console.log(this.props.audio.current.state.filter.frequency.value)

    this.props.audio.current.state.delay.delayTime.value = parseFloat(e.target.value)
  }

  render() {
    return (
      <div id="audio-effects">
        <input type="range" id="pitch" label="Pitch" min="0.0" max="24.0" defaultValue="0.0" value={this.state.value} step="0.5"  units="hz" onChange={this.handleChange} />
        <input type="range" id="distortion" label="Distortion" min="0.0" max="1.0" defaultValue="0.0" value={this.state.value} step="0.01"  units="dB" onChange={this.handleChange2} />
        <input type="range" id="delay" label="Delay" min="0.0" max="1.0" defaultValue="0.0" value={this.state.value} step="0.01"  units="ms" onChange={this.handleChange3} />
      </div>
    );
  }
}

export default AudioEffects;
