import React from 'react';
import indexHTML from '../assets/software/src/index.txt';
import reverbCpp from '../assets/software/src/reverb.cpp';
import filtersEq from '../assets/software/src/filters-eq.dsp';

class Software extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexHTML: "",
      reverbCpp: "",
      filtersEq: ""
    };
  }

  componentDidMount () {
    //let _this = this;

    fetch(indexHTML)
    .then(response => response.text())
    .then(data => {
      this.setState({
        indexHTML: data
      })
    });

    fetch(reverbCpp)
    .then(response => response.text())
    .then(data => {
      this.setState({
        reverbCpp: data
      })
    });

    fetch(filtersEq)
    .then(response => response.text())
    .then(data => {
      this.setState({
        filtersEq: data
      })
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (
        <div className="software">
          <div id="index-html">{this.state.indexHTML}</div>
          <div id="reverb-cpp">{this.state.reverbCpp}</div>
          <div id="filters-eq">{this.state.filtersEq}</div>
        </div>
    );
  }
}

export default Software;
