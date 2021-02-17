import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import track01 from '../assets/audio/5267TR98Y28_rev2(psx).wav'

class Audio extends React.Component {
  constructor(props) {
    super(props);
    
    this.player = React.createRef();

    this.state = {
      track: ""
    };

    this.getTrackName = this.getTrackName.bind(this);
    this.addTrackNameMarquee = this.addTrackNameMarquee.bind(this);
    this.onPlay = this.onPlay.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    this.setState({
      track: track01,
      name: this.getTrackName(track01)
    })

    this.addTrackNameMarquee(this.getTrackName(track01));
  }

  componentWillUnmount() {

  }

  getTrackName = (track) => {
    let str = String(track);
    str = str.split("/").pop();
    str = str.split(".")[0] + ".wav"

    return str;
  }

  addTrackNameMarquee = (name) => {
    let trackHeader = document.getElementsByClassName("rhap_header")[0];

    let trackNode = document.createElement('marquee');
    trackNode.className = "track-name-marquee";
    trackNode.innerHTML = name;
    trackNode.setAttribute("direction", "left");
    trackNode.setAttribute("scrollamount", 4);

    trackHeader.appendChild(trackNode);
  }

  onPlay = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div id="audio">
        <AudioPlayer
          src={track01}
          loop
          autoPlayAfterSrcChange={true}
          showSkipControls={false}
          showJumpControls={false}
          showDownloadProgress={false}
          showFilledProgress={false}
          showFilledVolume={false}
          showFilledVolume={false}
          showFilledVolume={false}
          customAdditionalControls={[]}
          header={"now playing: "}
          onPlay={this.onPlay}
          ref={this.player}
        />

      </div>
    );
  }
}

export default Audio;
