import React from 'react';

let Window;

class Poems extends React.Component {
  constructor(props) {
    super(props);

    Window = props.window;

    this.state = {

    };

    this.clicClac = this.clicClac.bind(this);
  }

  componentDidMount () {
    //let _this = this;

  }

  componentWillUnmount() {

  }

  clicClac = (e) => {
    console.log(e)
    let clic = document.getElementsByClassName("poems-clic")[0];

    let txt = e.target.innerText;

    if (txt == "clic") {
      clic.innerText = "clac";
    } else if (txt == "clac") {
      clic.innerText = "clic";
    }
  }

  render() {
    return (
        <div id="windows-poems">

          <Window>
            <div id="clic" className="poems-window">
              <div className="poems-text">
                <p className="poems-clic" onClick={this.clicClac}>clic</p>
              </div>  
              <div className="log-info">
                clic/clac
              </div>
            </div>
          </Window>

          <Window>
            <div id="hollow" className="poems-window">
              <div className="poems-text">
                01101000 01101111 01101100 01101100 01101111 01110111 00100000 01110111 01101111 01110010 01101100 01100100 
              </div>  
              <div className="log-info">
                hello world
              </div>
            </div>
          </Window>

          <Window>
            <div id="highway" className="poems-window">
              <div className="poems-text">
                <marquee behavior="scroll" direction="left" scrollamount="1">car</marquee>
                <marquee behavior="scroll" direction="right" scrollamount="12">car</marquee>
                <marquee behavior="scroll" direction="left" scrollamount="20">car</marquee>
                <marquee behavior="scroll" direction="right" scrollamount="50">car</marquee>
              </div>  
              <div className="log-info">
                bitstream 010010101
              </div>
            </div>
          </Window>

          <Window>
            <div id="frog" className="poems-window">
              <div className="poems-text">
                01000001 01101110 00100000 01101111 01101100 01100100 00100000 01110000 01101111 01101110 01100100 00001010 01000001 00100000 01100110 01110010 01101111 01100111 00100000 01101010 01110101 01101101 01110000 01110011 00100000 01101001 01101110 00001010 01010100 01101000 01100101 00100000 01110011 01101111 01110101 01101110 01100100 00100000 01101111 01100110 00100000 01110111 01100001 01110100 01100101 01110010
              </div>  
              <div className="log-info">
                an old pond
              </div>
            </div>
          </Window>

          <Window>
            <div id="buffer" className="poems-window">
              <div className="poems-buffer">
                <div>
                  <marquee behavior="scroll" direction="down" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">▓</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="10">▒</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">█</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="10">░</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">█</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">▒</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="10">░</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">█</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">█</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="10">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">░</marquee>
                </div>
                <div>
                  <marquee behavior="scroll" direction="up" scrollamount="20">█</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">█</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">▒</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="10">█</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">▒</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">▒</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="10">█</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="20">▒</marquee>
                  <marquee behavior="scroll" direction="up" scrollamount="20">░</marquee>
                  <marquee behavior="scroll" direction="down" scrollamount="10">█</marquee>
                </div>
              </div>  
              <div className="log-info">
                ░▒█░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░
              </div>
            </div>
          </Window>

          <Window>
            <div id="formes" className="poems-window">
              <div className="poems-formes">
                <div>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="4">∎</marquee>
                  <marquee width="50%" behavior="scroll" direction="right" scrollamount="4">●</marquee>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="2">x</marquee>
                  <marquee width="50%" behavior="scroll" direction="right" scrollamount="4">▲</marquee>
                </div>
                <div>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="4">x</marquee>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="2">∎</marquee>
                  <marquee width="50%" behavior="scroll" direction="right" scrollamount="4">●</marquee>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="2">▲</marquee>
                </div>
                <div>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="4">∎</marquee>
                  <marquee width="50%" behavior="scroll" direction="right" scrollamount="4">●</marquee>
                  <marquee width="50%" behavior="scroll" direction="right" scrollamount="2">x</marquee>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="4">▲</marquee>
                </div>
                <div>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="4">●</marquee>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="2">x</marquee>
                  <marquee width="50%" behavior="scroll" direction="left" scrollamount="4">▲</marquee>
                  <marquee width="50%" behavior="scroll" direction="right" scrollamount="4">∎</marquee>
                </div>
              </div>  
              <div className="log-info">
                ∎▲●x
              </div>
            </div>
          </Window>

          <Window>
            <div id="ochiba" className="poems-window">
              <div className="poems-text">
                <p>裏お店</p>
                <p>思うを見せて</p>
                <p> 飛ぶ落ち葉</p>
              </div>  
              <div className="log-info">
                良寛
              </div>
            </div>
          </Window>

          <Window>
            <div id="son" className="poems-window">
              <div className="poems-text">
                <p>le son du soleil</p>
                <p>une abeille végétale</p>
                <p> point blanc sur le mur</p>
              </div>  
              <div className="log-info">
                5-7-5
              </div>
            </div>
          </Window>
        </div>
    );
  }
}

export default Poems;
