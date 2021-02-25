import React from 'react';
import profile from '../assets/img/gcode-dither.png' 

let Window;

class Me extends React.Component {
  constructor(props) {
    super(props);
    
    Window = props.window;
  }

  componentDidMount () {
    //let _this = this;

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div id="windows-me">
        <Window>
          <div id="readme">
            <div>
              <p>Hi, my name is Guillaume Piccarreta.</p>
              <p>Welcome to my web portal interface.</p>
              <p>I am a software developer, teacher, audio and visual artist working with code.</p>
              <p>I like to make experimental software, write and fix bugs while listenning to white noise with a lowpass filter cutoff frequency set to 440Hz.</p>
              <p>Feel free to contact me at <a href="mailto:gcode.wav@gmail.com">gcode.wav@gmail.com</a></p>
              <p>Have a nice day :)</p>
            </div>
            <div className="log-info">
              /.//././//////./////.../
            </div>
          </div>
        </Window>

        <Window>
          <div id="profile">
            <img src={profile} alt="profile"/>
          </div>
        </Window>
      </div>
    );
  }
}

export default Me;
