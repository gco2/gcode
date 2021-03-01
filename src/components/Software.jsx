import React from 'react';
import indexHTML from '../assets/software/src/index.txt';
import reverbCpp from '../assets/software/src/reverb.cpp';
import filtersEq from '../assets/software/src/filters-eq.dsp';
import binaryTree from '../assets/software/src/binary-tree.cpp';
import sequencer from '../assets/software/src/sequencer.txt';
import modulation from '../assets/software/src/modulation.txt';
import tamago from '../assets/software/src/tamago.py';
import vx from '../assets/software/src/vx.txt';
import signalIcon from '../assets/img/signal.png';
import signalZip from '../assets/software/download/signal.zip';
import flowIcon from '../assets/img/flow.png';
import flowZip from '../assets/software/download/flow.zip';
import osc from '../assets/software/download/osc.pd';
import oscIcon from '../assets/img/osc.png';
import op3Icon from '../assets/img/pd.png';
import op3Zip from '../assets/software/download/op3.zip';
import fishIcon from '../assets/img/fish-exe.png';
import fishExe from '../assets/software/download/FiSH.exe';

let Window;

class Software extends React.Component {
  constructor(props) {
    super(props);

    Window = props.window;

    this.state = {
      indexHTML: "",
      reverbCpp: "",
      filtersEq: "",
      binaryTree: "",
      sequencer: "",
      modulation: "",
      tamago: "",
      vx: ""
    };
  }

  componentDidMount () {
    //let _this = this;

    fetch(indexHTML)
    .then(response => response.text())
    .then(data => {
      this.setState({
        indexHTML: data
      })
    });

    fetch(reverbCpp)
    .then(response => response.text())
    .then(data => {
      this.setState({
        reverbCpp: data
      })
    });

    fetch(filtersEq)
    .then(response => response.text())
    .then(data => {
      this.setState({
        filtersEq: data
      })
    });

    fetch(binaryTree)
    .then(response => response.text())
    .then(data => {
      this.setState({
        binaryTree: data
      })
    });

    fetch(sequencer)
    .then(response => response.text())
    .then(data => {
      this.setState({
        sequencer: data
      })
    });

    fetch(modulation)
    .then(response => response.text())
    .then(data => {
      this.setState({
        modulation: data
      })
    });

    fetch(tamago)
    .then(response => response.text())
    .then(data => {
      this.setState({
        tamago: data
      })
    });

    fetch(vx)
    .then(response => response.text())
    .then(data => {
      this.setState({
        vx: data
      })
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (
        <div id="windows-software">
          <div className="software-src">
            <div id="index-html">{this.state.indexHTML}</div>
            <div id="reverb-cpp">{this.state.reverbCpp}</div>
            <div id="filters-eq">{this.state.filtersEq}</div>
            <div id="binary-tree">{this.state.binaryTree}</div>
            <div id="sequencer">{this.state.sequencer}</div>
            <div id="vx">{this.state.vx}</div>
            <div id="modulation">{this.state.modulation}</div>
            <div id="tamago">{this.state.tamago}</div>
            <div id="vx">{this.state.vx}</div>
          </div>

          <Window>
            <div id="flow" className="software-window">
              <div>
                <img src={flowIcon} alt="flow"/>
              </div>
              <div>
                <a className="software-link" href={flowZip} download>flow.zip</a>
              </div>
              <div className="software-text">
                <p>
                  flow is a standalone audio application.
                </p>
                <p>
                  The visual programming interface let's you create patches (filtergraphs) from scratch using internal effects (gain, gate, eq, reverb).
                </p>
                <p>
                  VST2/VST3 can also be used as audio or MIDI nodes into the flow graph.
                </p>
                <p>
                  current version: 0.0.4, Windows 64bit
                </p>
              </div>  
              <div className="log-info">
                audio visual programming standalone application
              </div>
            </div>
          </Window>

          <Window>
            <div id="signal" className="software-window">
              <div>
                <img src={signalIcon} alt="signal"/>
              </div>
              <div>
                <a className="software-link" href={signalZip} download>signal.zip</a>
              </div>
              <div className="software-text">
                <p>
                  signal is an audio tool utility application.
                </p>
                <p>
                  audio analysis from left + right channels coming from your device audio input.
                </p>
              </div>  
              <div className="log-info">
                audio analysis tool binary
              </div>
            </div>
          </Window>

          <Window>
            <div id="osc" className="software-window">
              <div>
                <img src={oscIcon} alt="osc"/>
              </div>
              <div>
                <a className="software-link" href={osc} download>osc.pd</a>
              </div>
              <div className="software-text">
                <p>
                 pure data basic synthesis
                </p>
                <p>
                  AM / RM / FM / synthesis, ADSR enveloppe + wave plot
                </p>
              </div>  
              <div className="log-info">
                self oscillation threshold: *~
              </div>
            </div>
          </Window>

          <Window>
            <div id="op3" className="software-window">
              <div>
                <img src={op3Icon} alt="op3"/>
              </div>
              <div>
                <a className="software-link" href={op3Zip} download>op3.zip</a>
              </div>
              <div className="software-text">
                <p>
                 pure data FM synthesizer
                </p>
                <p>
                  3 operators, 4 bands equalizer + light reverb
                </p>
                <p>
                  inspired by the Yamaha DX7 frequency modulation synthesis, generated from faust2pd architecture
                </p>

              </div>  
              <div className="log-info">
                FM synthesizer, puredata 64bit
              </div>
            </div>
          </Window>

          <Window>
            <div id="fish" className="software-window">
              <div>
                <img src={fishIcon} alt="fish-exe"/>
              </div>
              <div>
                <a className="software-link" href={fishExe} download>FiSH.exe</a>
              </div>
              <div className="software-text">
                <p>
                  FiSH is an underwater simulation game.
                </p>
                <p>
                  You control a small fish to explore your environment and grab plankton particles.
                </p>
                <p>
                  I think this is the first software I ever wrote (around middle school).<br />
                </p>
                <p>
                  I don't really remember.
                </p>
              </div>  
              <div className="log-info">
                fish simulation game
              </div>
            </div>
          </Window>

        </div>
    );
  }
}

export default Software;
