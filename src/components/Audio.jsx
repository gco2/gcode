import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import track01 from '../assets/audio/5267TR98Y28_rev2(psx).mp3'
import track02 from '../assets/audio/stdio.mp3'

class Audio extends React.Component {
  constructor(props) {
    super(props);
    
    this.player = React.createRef();

    this.state = {
      track: ""
    };

    this.getTrackName = this.getTrackName.bind(this);
    this.addTrackNameMarquee = this.addTrackNameMarquee.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.onPlay = this.onPlay.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    this.setState({
      track: "",
      name: ""
    })

    this.addTrackNameMarquee("???? - ????");

    this.updateAudio();
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

  updateAudio = (e) => {
    let marquee = document.getElementsByClassName("track-name-marquee")[0];

    marquee.addEventListener('DOMSubtreeModified', (event) => {
      let trackID;
      let trackName = marquee.getAttribute("track-id");

      if (trackName == "5267TR98Y28_rev2(psx)") {
        this.setState({ track: track01})
      } else if (trackName == "stdio") {
        this.setState({ track: track02})
      }
    });
  }

  onPlay = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div id="audio">
        <AudioPlayer
          src={this.state.track}
          ref={this.player}
          loop
          autoPlayAfterSrcChange={true}
          showSkipControls={false}
          showJumpControls={false}
          showDownloadProgress={true}
          showFilledProgress={false}
          showFilledVolume={false}
          customAdditionalControls={[]}
          header={"now playing: "}
          defaultCurrentTime="loading"
          defaultDuration="loading" 
          customIcons={{
            play: "▶",
            pause: "❚❚"
          }}
          onPlay={this.onPlay}
        />

      </div>
    );
  }
}

export default Audio;
