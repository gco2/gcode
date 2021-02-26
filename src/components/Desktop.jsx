import React from 'react';
import Digits from './Digits';
import Window from './Window';
import Me from './Me';
import Images from './Images';

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
            <Me window={Window} />
            <Images window={Window} />
          </div>
        </div>
    );
  }
}

export default Desktop;
