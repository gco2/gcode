import React from 'react';
import { useWindupString, WindupChildren, Pace  } from 'windups';
import indexHTML from '../assets/software/src/index.txt';

// let LogText = (txt) => {
//   let [text] = useWindupString(txt.children, {
//     pace: (char) => (char === " " ? 200 : 40),
//   });

//   return (
//     <div>{text}</div>
//   )
// };

let intervalID;

let LogData = (props) => {
  return (
    <div className="log-data">
      <div className="log-data-title">logs</div>
      <WindupChildren>
        <Pace getPace={(char) => (char === " " ? 20 : 10)}>
          <div>{props.children.name}</div>
          <div>{props.children.date}</div>
          <div>{props.children.size}</div>
          <div>{props.children.text}</div>
        </Pace>
      </WindupChildren>
    </div>
  );
};

let LogStream = (props) => {
  // let txt = props.children.stream;

  // let [text] = useWindupString(txt, {
  //   pace: (char) => (char === " " ? 200 : 40),
  // });

  // intervalID = window.setInterval(function() {
  //   var elem = document.getElementsByClassName('log-stream')[0];
  //   elem.scrollTop = elem.scrollHeight;
  // }, 100);
  // console.log(intervalID)

  return (
    // <WindupChildren>
    //   <div className="log-stream">{props.children.stream}</div>
    // </WindupChildren>
    // <div className="log-stream">{text}</div>
    <div className="log-stream">
      <div className="log-stream-title">data</div>
      <WindupChildren onFinished={stopScroll}>
        <Pace getPace={(char) => (char === " " ? 20 : 10)}>
          <div>{props.children.stream}</div>
        </Pace>
      </WindupChildren>
    </div>
  );
};

function stopScroll() {
  if(intervalID) {
    window.clearInterval(intervalID);
    intervalID = null;
  }
}

class Log extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: "",
      size: "",
      text: "",
      stream: ""
    };
  }

  componentDidMount () {
    //let _this = this;
    fetch(indexHTML)
    .then(response => response.text())
    .then(data => {
      this.setState({
        stream: data
      })
    });

    let logCache = document.getElementsByClassName("log-cache")[0];

    logCache.addEventListener('DOMSubtreeModified', (event) => {
      this.setState({
        name: event.target.name,
        date: event.target.date,
        size: event.target.size,
        text: event.target.innerText,
      })

      // if (this.state.stream != event.target.stream) {
      //   this.setState({
      //     stream: event.target.stream
      //   })
      // }
      
    });

    let srcCache = document.getElementsByClassName("src-cache")[0];

    srcCache.addEventListener('DOMSubtreeModified', (event) => {
      this.setState({
        stream: event.target.innerText,
      })
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (
        <div className="log">
          <span className="log-cache"></span>
          <span className="src-cache"></span>
          <LogData>{this.state}</LogData>
          <LogStream>{this.state}</LogStream>
        </div>
    );
  }
}

export default Log;
