import React from 'react';
import Me from './Me'

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
          <Me />
        </div>
    );
  }
}

export default Desktop;
