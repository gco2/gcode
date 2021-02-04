import React from 'react';
import Draggable from 'react-draggable';

class Me extends React.Component {
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

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
  
  render() {
    return (
      <Draggable
        axis="both"
        bounds=".desktop"
        // handle=".handle"
        defaultClassName="window"
        defaultClassNameDragging="window-dragging"
        defaultClassNameDragged="window-dragged"
        defaultPosition={{x: 0, y: 0}}
        // position={null}
        grid={[50, 50]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}

export default Me;
