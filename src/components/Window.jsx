import React from 'react';
import Draggable from 'react-draggable';

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragged: false
    };

    this.onStart = this.onStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
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
  
  onStart = () => {
    console.log("DRAG START");
    this.setState(prevState => ({ isDragged: !prevState.isDragged }));
  };

  onDrag = () => {
    //console.log("DRAG ON");
  };


  onStop = () => {
    console.log("DRAG STOP");
    this.setState(prevState => ({ isDragged: !prevState.isDragged }));
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onDrag: this.onDrag, onStop: this.onStop};
    const { isDragged } = this.state;

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
        onStop={this.handleStop}
        {... dragHandlers}
      >
        <div className={`box ${isDragged ? "is-dragged" : ""}`}>
          <div className="handle">Drag from here</div>
          {this.props.children}
        </div>
      </Draggable>
    );
  }
}

export default Window;
