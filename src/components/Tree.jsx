import React from 'react';
import '../utils/nav/vanillatree/vanillatree.css'
import VanillaTree from '../utils/nav/vanillatree/vanillatree.js'
import data from '../assets/data/data.json'

class Tree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tree: ""
    };

    this.parseTree = this.parseTree.bind(this);
    this.selected = this.selected.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    let main = document.querySelector('main');

    let tree = new VanillaTree(main);
    this.setState({
      tree: tree
    });

    this.parseTree(tree);    

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
    
    main.addEventListener('vtree-select', (evt) => this.selected(evt) );
    
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
    
  }
  
  render() {
    return (        
        <main className="tree">

        </main>
    );
  }
}

export default Tree;
