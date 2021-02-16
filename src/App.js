import React from 'react';
import './App.css';
import TerminalWindow from './components/TerminalWindow';
import Tree from './components/Tree';
import Desktop from './components/Desktop';
import Footer from './components/Footer';
import Log from './components/Log';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

    this.treeRef = React.createRef();
    this.terminalRef = React.createRef();
    this.desktopRef = React.createRef();
    this.footerRef = React.createRef();
    this.logRef = React.createRef();
  }

  componentDidMount () {
    //let _this = this;

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
          <Footer ref={this.footerRef} />
        </div>

        <div className="right-panel">
          <Log reg={this.logRef} />
        </div>
      </div>
    );
  }
}

export default App;
