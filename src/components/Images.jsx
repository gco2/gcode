import React from 'react';
import systemTools from '../assets/img/ResEditPatch.png' 
import waveFunction from '../assets/img/wave-function.jpg' 

let Window;

class Images extends React.Component {
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
      <div id="windows-images">
        <Window>
          <div id="system-tools">
            <img src={systemTools} alt="system-tools"/>

            <div className="log-info">
            vvvvvvv00000000
            </div>
          </div>
        </Window>

        <Window>
          <div id="wave-function">
            <img src={waveFunction} alt="wave-function"/>

            <div className="log-info">
              z(u, y) = sin(2*u)*cos(2xy)
            </div>
          </div>
        </Window>
      </div>
    );
  }
}

export default Images;
