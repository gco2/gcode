import React from 'react';
import { useWindupString, WindupChildren  } from "windups";

// let LogText = (txt) => {
//   let [text] = useWindupString(txt.children, {
//     pace: (char) => (char === " " ? 200 : 40),
//   });

//   return (
//     <div>{text}</div>
//   )
// };

let LogData = (props) => {
  return (
    <WindupChildren>
      <div>{props.children.name}</div>
      <div>{props.children.date}</div>
      <div>{props.children.size}</div>
      <div>{props.children.text}</div>
    </WindupChildren>
  );
};

class Log extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: "",
      size: "",
      text: ""
    };
  }

  componentDidMount () {
    //let _this = this;
    let logCache = document.getElementsByClassName("log-cache")[0];

    logCache.addEventListener('DOMSubtreeModified', (event) => {
      this.setState({
        name: event.target.name,
        date: event.target.date,
        size: event.target.size,
        text: event.target.innerText
      })
    });
  }

  componentWillUnmount() {

  }
  
  render() {
    return (        
        <div className="log">
          <span className="log-cache"></span>        
          <LogData>{this.state}</LogData>
        </div>
    );
  }
}

export default Log;
