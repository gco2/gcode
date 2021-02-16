import React from 'react';
import '../utils/nav/vanillatree/vanillatree.css';
import VanillaTree from '../utils/nav/vanillatree/vanillatree.js';
import data from '../assets/data/data.json';

class Tree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tree: "",
      event: ""
    };

    this.parseTree = this.parseTree.bind(this);
    this.selected = this.selected.bind(this);
    this.updateLog = this.updateLog.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    let main = document.querySelector('main');

    let tree = new VanillaTree(main);
    this.setState({
      tree: tree
    });

    main.addEventListener('vtree-add', function(evt) {
      // when added
    });
    
    main.addEventListener('vtree-remove', function(evt) {
      // when closed
    });
    
    main.addEventListener('vtree-move', function(evt) {
      // when moved
    });
    
    main.addEventListener('vtree-open', function(evt) {
      // when opened
      // console.log("opened: ", evt);
    });
    
    main.addEventListener('vtree-close', function(evt) {
      // when closed
    });
    
    main.addEventListener('vtree-select', (evt) => {
      // when selected
      this.selected(evt);
    });

    this.parseTree(tree);    
  }

  componentWillUnmount() {

  }

  parseTree(tree) {
    for (const [key, value] of Object.entries(data)) {
      //console.log(key, value);

      tree.add({
        label: value.label,
        id: value.id,
        parent: value.parent,
        opened: value.opened,
        selected: value.selected
      });
    }
  }

  selected(evt) {
    // when selected
    console.log("selected: ", evt);

    this.setState({
      event: evt
    });
    
    let window = document.getElementById(evt.detail.id);
    if (window) {
      window = window.closest(".window");
      
      // let desktopWidth = document.getElementsByClassName("desktop")[0].offsetWidth;
      // let desktopHeight = document.getElementsByClassName("desktop")[0].offsetHeight;

      window.style.visibility = "visible";

      // let windowWidth = window.offsetWidth;
      // let windowHeight = window.offsetHeight;

      // let posX = Math.floor(Math.random() * (desktopWidth));
      // if ( (posX + windowWidth > desktopWidth)) {
      //   posX = posX - windowWidth;
      // }

      // let posY = Math.floor(Math.random() * (desktopHeight));
      // if ( (posY + windowHeight > desktopHeight)) {
      //   posY = posY - windowHeight;
      // }

      // window.style.transform = "translate(" + posX + "px," + posY + "px)";
      // console.log(posX, posY)

      this.updateLog(window);
    }
  }

  updateLog = (window) => {
    let windowElement = window;

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
      logCache.date = "date: " + new Date(Date.now()).toISOString();
      logCache.size = "size: " + Math.floor(Math.random() * 50000) + " kb";
      logCache.innerText = "info: " + text;
    }
  }
  
  render() {
    return (        
        <main className="tree">

        </main>
    );
  }
}

export default Tree;
