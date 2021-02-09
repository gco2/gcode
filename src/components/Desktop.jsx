import React from 'react';
import Window from './Window';
import Me from './Me';

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
        <div className="desktop">
          <Me window={Window} />
        </div>
    );
  }
}

export default Desktop;
