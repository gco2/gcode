import React from 'react';
import Clock from 'react-digital-clock';

class Header extends React.Component {
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
      <div className="header">
        <div className="header-title">gcode</div>
        <div className="clock"><Clock /></div>
      </div>
    );
  }
}

export default Header;
