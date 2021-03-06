import React from 'react';
import Oscilloscope from 'oscilloscope';
import AudioEffects from './AudioEffects';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import track01 from '../assets/audio/stdio.mp3'
import track02 from '../assets/audio/dust__45mph.mp3'
import track03 from '../assets/audio/IPv4__RFC791.mp3'
import track04 from '../assets/audio/5267TR98Y28_rev2(psx).mp3'
import track05 from '../assets/audio/unknown__portal.mp3'
import clic from '../assets/audio/clic.mp3'
import close from '../assets/audio/close.mp3'
import hover from '../assets/audio/hover.mp3'
import { useWindupString, WindupChildren, Pace  } from 'windups';

let AudioTitle = (props) => {
  return (
    <WindupChildren>
      <Pace getPace={(char) => (char === " " ? 20 : 10)}>
        {props.children}
      </Pace>
    </WindupChildren>
  );
};

class Audio extends React.Component {
  constructor(props) {
    super(props);
    
    this.player = React.createRef();

    this.state = {
      track: "",
      name: "",
      header: "player",
      audioContext: new window.AudioContext()
    };

    this.getTrackName = this.getTrackName.bind(this);
    this.addTrackNameMarquee = this.addTrackNameMarquee.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.startOscilloscope = this.startOscilloscope.bind(this);
    this.setAudioInterface = this.setAudioInterface.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onListen = this.onListen.bind(this);
    this.onSeeking = this.onSeeking.bind(this);
    this.onCanPlayThrough = this.onCanPlayThrough.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    this.setState({
      track: track01,
      name: ""
    })

    this.setAudioInterface();

    // ♫ ♪ ♫ ♪ 
    this.addTrackNameMarquee("░░░░▓▓▓▒▒▒▒▒░░░░▒▒▒▒▒▒▓▓▒▒▒▒░░░░░░░░░▓▓▓▒▒▒▒▒░▒▒▒▒▒▓▓▒▒▒▒░░░");

    this.updateAudio();

    this.startOscilloscope(this.state.audioContext);
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
    let trackHeader = document.getElementsByClassName("rhap_main")[0];

    let trackNode = document.createElement('marquee');
    trackNode.className = "track-name-marquee";
    trackNode.innerHTML = name;
    trackNode.setAttribute("direction", "left");
    trackNode.setAttribute("scrollamount", 4);
    
    trackHeader.prepend(trackNode);
  }

  updateAudio = (e) => {    
    let marquee = document.getElementsByClassName("track-name-marquee")[0];

    marquee.addEventListener('DOMSubtreeModified', (event) => {
      let trackName = marquee.getAttribute("track-id");

      if (trackName == "stdio") {
        this.setState({ track: track01});
      } else if (trackName == "dust__45mph") {
        this.setState({ track: track02});
      } else if (trackName == "IPv4__RFC791") {
        this.setState({ track: track03});
      } else if (trackName == "5267TR98Y28_rev2(psx)") {
        this.setState({ track: track04});
      } else if (trackName == "unknown__portal") {
        this.setState({ track: track05});
      }
    });
  }

  startOscilloscope = (context) => {
    const canvas = document.createElement('canvas')
    canvas.classList.add("oscilloscope");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementsByClassName("footer")[0].appendChild(canvas);
  
    const source = context.createMediaElementSource(this.player.current.audio.current)
    const scope = new Oscilloscope(source)
    
    source.connect(context.destination);

    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 2
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)'
  
    // start default animation loop
    scope.animate(ctx)
  }

  setAudioInterface = () => {
    let clic = document.getElementById("audio-clic");
    let close = document.getElementById("audio-close");
    let hover = document.getElementById("audio-hover");

    let leaves = document.getElementsByClassName("vtree-leaf");
    [...leaves].forEach(leaf => {
      leaf.onmouseenter = function(){
        hover.play().then(_ => {
          //console.log("hovered");
        })
        .catch(error => {
          //console.log(error)
        });
      };

      leaf.onmouseleave = function(){
        hover.pause();
        hover.currentTime = 0;
      };

      leaf.onclick = function(){
        clic.play().then(_ => {
          //console.log("clicked");
        })
        .catch(error => {
          //console.log(error)
        });
      };
    });

    let closeButtons = document.getElementsByClassName("window-close");
    [...closeButtons].forEach(btn => {
      btn.onclick = function(){
        close.play().then(_ => {
          //console.log("closed");
        })
        .catch(error => {
          //console.log(error)
        });
      };
    });
  }

  onPlay = (e) => {
    //console.log(e)
    this.setState({
      header: <AudioTitle>now playing: </AudioTitle>
    })

    if(this.state.audioContext.state === 'suspended') {
      this.state.audioContext.resume().then(function() {

    }).catch(error => {
      //console.log(error)
    });
    }
  
  }

  onPause = (e) => {
    //console.log(e)

    this.setState({
      header: <AudioTitle>player</AudioTitle>
    })
  }


  onListen = (e) => {
    //console.log(e)
  
  }

  onSeeking = (e) => {
    //console.log(e)
  }

  onCanPlayThrough = (e) => {
    //console.log(e)
  }

  render() {
    return (
      <div id="audio">
        <div id="audio-player">
          <AudioPlayer
            src={this.state.track}
            ref={this.player}
            loop={true}
            autoPlay={false}
            autoPlayAfterSrcChange={true}
            showSkipControls={false}
            showJumpControls={false}
            showDownloadProgress={true}
            showFilledProgress={false}
            showFilledVolume={false}
            customAdditionalControls={[]}
            header={this.state.header}
            defaultCurrentTime="loading"
            defaultDuration="loading" 
            customIcons={{
              play: "▶",
              pause: "❚❚"
            }}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onListen={this.onListen}
            onSeeking={this.onSeeking}
            onCanPlayThrough={this.onCanPlayThrough}
          />

          <div id="audio-interface">
            <audio id="audio-clic" src={clic}></audio>
            <audio id="audio-close" src={close}></audio>
            <audio id="audio-hover" src={hover}></audio>
          </div>
        </div>

        <AudioEffects />
      </div>
    );
  }
}

export default Audio;
