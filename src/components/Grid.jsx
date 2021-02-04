import React from 'react';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {
    //let _this = this;

  }

  componentWillUnmount() {

  }

  
  render() {
    return (        
        <div className="grid">
            <div className="line">
              <div className="square"><div className="number">1</div></div>
              <div className="square"><div className="number">2</div></div>
              <div className="square"><div className="number">3</div></div>
              <div className="square no-br"><div className="number">4</div></div>
            </div>
            <div className="line">
              <div className="square"><div className="number">5</div></div>
              <div className="square"><div className="number">6</div></div>
              <div className="square"><div className="number">7</div></div>
              <div className="square no-br"><div className="number">8</div></div>
            </div>
            <div className="line">
              <div className="square"><div className="number">9</div></div>
              <div className="square"><div className="number">10</div></div>
              <div className="square"><div className="number">11</div></div>
              <div className="square no-br"><div className="number">12</div></div>
            </div>
            <div className="line">
              <div className="square"><div className="number">13</div></div>
              <div className="square"><div className="number">14</div></div>
              <div className="square"><div className="number">15</div></div>
              <div className="square no-br"><div className="number">16</div></div>
            </div>
            <div className="mixer"></div>
        </div>
    );
  }
}

export default Grid;
