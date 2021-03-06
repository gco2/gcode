import React from 'react';
import * as Tone from 'tone';


class AudioEffects extends React.Component {
  constructor(props) {
    super(props);
    
    this.player = React.createRef();

    this.state = {
      audioContext: "",
      effect: "",
      panner: ''
    };

    this.setupEffects = this.setupEffects.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    this.setState({

    })


    //this.setupEffects(this.state.audioContext);
  }

  componentWillUnmount() {

  }

  setupEffects = (context) => {
    Tone.setContext(context);

    this.setState({
      panner: new Tone.AutoPanner({
        frequency: 4,
        depth: 1
      }).toDestination().start()
    })
    
    //document.querySelector("#panner").addEventListener("input", (e) => panner.frequency.value = parseFloat(e.target.value));
  }

  handleChange = (e) => {
    //console.log(this.state.panner.frequency.value);

    this.state.panner.frequency.value = parseFloat(e.target.value);
  }

  render() {
    return (
      <div id="audio-effects">
        <input type="range" id="panner" label="Panner" min="1" max="15" value={this.state.value} step="0.5"  units="hz" onChange={this.handleChange} />
      </div>
    );
  }
}

export default AudioEffects;
