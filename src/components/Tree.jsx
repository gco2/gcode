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
    this.updateAudio = this.updateAudio.bind(this);
    this.updateSoftware = this.updateSoftware.bind(this);
    this.updateLog = this.updateLog.bind(this);
    this.updateLink = this.updateLink.bind(this);
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
    //console.log("selected: ", evt);

    this.setState({
      event: evt
    });
    
    let window = document.getElementById(evt.detail.id);
    if (window) {
      window = window.closest(".window");

      if(window) {
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

    this.updateAudio(evt);

    this.updateSoftware(evt);
    
    this.updateLink(evt);

  }

  updateAudio = (e) => {
    if (e.target.offsetParent != null) {
      let audioLeaf = e.target.offsetParent.offsetParent;
      if (audioLeaf && (audioLeaf.getAttribute("data-vtree-id") == "audio")) {
        let id = e.target.getAttribute("data-vtree-id");
        let trackName = e.target.innerText;
  
        let currentTrackName = document.getElementsByClassName("track-name-marquee")[0].innerText;
  
        if (currentTrackName && (trackName != currentTrackName)) {
          document.getElementsByClassName("track-name-marquee")[0].setAttribute("track-id", id);
          document.getElementsByClassName("track-name-marquee")[0].innerText = trackName;
        }
      }  
    }
  }

  updateSoftware = (e) => {
    if (e.target.offsetParent != null) {
      let leaf = e.target.offsetParent.offsetParent;
      if (leaf && (leaf.getAttribute("data-vtree-id") == "src")) {
        let id = e.target.getAttribute("data-vtree-id");
        
        let element = document.getElementById(id);
        let text = element.innerText;

        let srcCache = document.getElementsByClassName("src-cache")[0];
        if (srcCache.innerText != text) {
          srcCache.innerText = text;
        }  
      }
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
      logCache.date = "date: " + new Date(Date.now()).toUTCString();
      logCache.size = "size: " + Math.floor(Math.random() * 50000) + " kb";
      logCache.innerText = "info: " + text;
    }
  }

  updateLink = (e) => {
    if (e.target.offsetParent != null) {
      let leaf = e.target.offsetParent.offsetParent;
      if (leaf && (leaf.getAttribute("data-vtree-id") == "links")) {
        let id = e.target.getAttribute("data-vtree-id");
        
        switch (id) {
          case 'forth':
            window.open("http://forth.works/", "_blank"); 
            break;
          case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
          default:
            
        }
      }
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
