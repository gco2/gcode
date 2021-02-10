import React from 'react';
import Draggable from 'react-draggable';

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragged: false,
      controlledPosition: {
        x: 400, y: 200
      }  
    };

    this.onStart = this.onStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
    this.setRandomPosition = this.setRandomPosition.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    this.setRandomPosition();
  }

  componentWillUnmount() {

  }

  onStart = () => {
    console.log("DRAG START");
    this.setState(prevState => ({ isDragged: !prevState.isDragged }));
  };

  onDrag = (e) => {
    //console.log("DRAG ON");
  };


  onStop = () => {
    console.log("DRAG STOP");
    this.setState(prevState => ({ isDragged: !prevState.isDragged }));
  };

  // For controlled component
  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  setRandomPosition = () => {
    let desktopWidth = document.getElementsByClassName("desktop")[0].offsetWidth;
    let desktopHeight = document.getElementsByClassName("desktop")[0].offsetHeight;

    let windowWidth = document.getElementsByClassName("window")[0].offsetWidth;
    let windowHeight = document.getElementsByClassName("window")[0].offsetHeight;

    let posX = Math.floor(Math.random() * (desktopWidth));
    if ( (posX + windowWidth > desktopWidth)) {
      posX = posX - windowWidth;
    }

    let posY = Math.floor(Math.random() * (desktopHeight));
    if ( (posY + windowHeight > desktopHeight)) {
      posY = posY - windowHeight;
    }
    
    this.setState({
      controlledPosition: {x: posX, y: posY}
    })
  }
  
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const { isDragged, controlledPosition } = this.state;

    return (
      <Draggable
        axis="both"
        bounds=".desktop"
        // handle=".handle"
        defaultClassName="window"
        defaultClassNameDragging="window-dragging"
        defaultClassNameDragged="window-dragged"
        // defaultPosition={{x: 0, y: 0}}
        position={controlledPosition}
        grid={[50, 50]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.onControlledDrag}
        onStop={this.onControlledDragStop}
        {...dragHandlers}
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
