import React from 'react';

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
      <Window>
        <div id="readme">
          <div>This readme is really dragging on...</div>
        </div>
      </Window>
    );
  }
}

export default Me;
