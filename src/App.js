import React from 'react';
import './App.css';
import TerminalWindow from './components/TerminalWindow'
import Tree from './components/Tree'
import Desktop from './components/Desktop'
import Log from './components/Log'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {
    //let _this = this;

    this.treeRef = React.createRef();
    this.terminalRef = React.createRef();
    this.desktopRef = React.createRef();
    this.logRef = React.createRef();
  }

  componentWillUnmount() {

  }
  
  showMsg = () => 'Hello World'

  render() {
    return (
      <div className="app">

        <div className="left-panel">
          <TerminalWindow ref={this.terminalRef} />
          <Tree ref={this.treeRef} />
        </div>
        
        <div className="center-panel">
          <Desktop ref={this.desktopRef} />
          <div className="footer">
            footer
          </div>
        </div>

        <div className="right-panel">
          <Log reg={this.logRef} />
        </div>
      </div>
    );
  }
}

export default App;
