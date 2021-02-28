import React from 'react';
import Digits from './Digits';
import Window from './Window';
import Me from './Me';
import Images from './Images';
import Software from './Software'

class Desktop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  componentDidMount () {
    //let _this = this;
  }

  componentWillUnmount() {

  }

  render() {
    return (        
        <div className="desktop" >
          <Digits />
          <div className="desktop-windows">
            <div id="windows-mobile">
              <Window>
                <div>
                  <p>sorry your device is too powerful</p>
                  <p>try again from a <a href="https://www.goto10.fr/" target="_blank">BBS</a> server near you</p>
                  <p>----------</p>
                  <p>thank you :)</p>
                </div>
              </Window>
            </div>

            <Me window={Window} />
            <Images window={Window} />
            <Software window={Window} />
          </div>
        </div>
    );
  }
}

export default Desktop;
