import React from 'react';
import Draggable from 'react-draggable';

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragged: false,
      name: "",
      controlledPosition: {
        x: 0, y: 0
      }  
    };

    this.onStart = this.onStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
    this.setName = this.setName.bind(this);
    this.setRandomPosition = this.setRandomPosition.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.preventImageDrag = this.preventImageDrag.bind(this);
    this.setWindowOnTop = this.setWindowOnTop.bind(this);
    this.updateLog = this.updateLog.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    this.setName();
    this.setRandomPosition();
    this.preventImageDrag();
  }

  componentWillUnmount() {

  }

  onStart = (e) => {
    //console.log("DRAG START");
    this.setState(prevState => ({ isDragged: !prevState.isDragged }));

    this.setWindowOnTop(e);

    this.updateLog(e);
  };

  onDrag = (e) => {
    //console.log("DRAG ON");
  };


  onStop = (e) => {
    //console.log("DRAG STOP");
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

  setName = () => {
    let id = this.props.children.props.id;

    let leaves = document.getElementsByClassName("vtree-leaf");
    
    [...leaves].forEach(element => {
      let leaveId = element.getAttribute("data-vtree-id");

      if (id === leaveId) {
        let text = element.innerText;
        this.setState({
          name: text
        })
      }
    });
  }

  setRandomPosition = () => {
    let desktopWidth = document.getElementsByClassName("desktop")[0].offsetWidth;
    let desktopHeight = document.getElementsByClassName("desktop")[0].offsetHeight;

    let windowWidth = document.getElementsByClassName("window")[0].offsetWidth;
    let windowHeight = document.getElementsByClassName("window")[0].offsetHeight;

    let posX = Math.floor(Math.random() * (desktopWidth - windowWidth));
    if ( (posX + windowWidth >= desktopWidth)) {
      posX = posX - windowWidth;
    }

    let posY = Math.floor(Math.random() * (desktopHeight - windowHeight));

    if ( ((posY + windowHeight) >= (desktopHeight - windowHeight))) {
      posY = desktopHeight - windowHeight*2;
    }
    
    this.setState({
      controlledPosition: {x: posX, y: posY}
    })
  }

  closeWindow = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let windowElement = e.target.closest(".window");
    windowElement.style.visibility = "hidden";

    let id = windowElement.childNodes[1].childNodes[0].id;

    let selectedElement = document.getElementsByClassName("vtree-selected")[0];
    if (selectedElement && (selectedElement.getAttribute("data-vtree-id") == id)) {
      selectedElement.classList.remove("vtree-selected");
    }
  }

  preventImageDrag = () => {
    let images = document.getElementsByTagName("img");

    [...images].forEach(element => {
      element.setAttribute("draggable", false);
    });
  }

  setWindowOnTop = (e) => {
    let windows = document.getElementsByClassName("window");
    [...windows].forEach(window => {
      window.style.zIndex = 1;
    });

    let currentWindow = e.target.closest(".window");
    currentWindow.style.zIndex = 2;
  }

  updateLog = (e) => {
    if (e.target.getAttribute("class") != "window-close") {
      let windowElement = e.target.offsetParent;

      let name = windowElement.childNodes[0].childNodes[1].innerText;
      let text = windowElement.childNodes[1].childNodes[0].getElementsByClassName("log-info")[0];
      if (text) {
        text = text.innerText;
      } else {
        text = "???";
      }
  
      let logCache = document.getElementsByClassName("log-cache")[0];
  
      if (logCache.innerText != ("info: " + text)) {
        logCache.name = "file: " + name;
        logCache.date = "date: " + new Date(Date.now()).toUTCString();
        logCache.size = "size: " + Math.floor(Math.random() * 50000) + " kb";
        logCache.innerText = "info: " + text;
      }  
    }
  }
  
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const { isDragged, controlledPosition } = this.state;

    return (
      <Draggable
        axis="both"
        bounds=".desktop"
        // handle=".window-handle"
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
          <div className="window-handle">
            <div className="window-close" onClick={this.closeWindow}>x</div>
            <div className="window-name">{this.state.name}</div>
          </div>
          <div className="window-content">
            {this.props.children}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Window;
