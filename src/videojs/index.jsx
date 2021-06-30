import React, { Component } from "react";
import PropTypes from "prop-types";

import Videojs from "video.js";
import Dropdown from 'react-bootstrap/Dropdown';
// import "videojs-plus";
// import "videojs-plus/dist/videojs-plus.css";

// Add hls plug-in to guarantee to play m3u8 format video
import "videojs-contrib-hls";
import "video.js/dist/video-js.css";
import "./style.css";

window.videojs = Videojs;
import("video.js/dist/lang/zh-CN.js");

const vjsComponent = Videojs.getComponent('Component');
class EpisodeList extends vjsComponent {
  render() {
    return (
        <button>hello</button>
    );
  }
}

vjsComponent.registerComponent('EpisodeList', EpisodeList);

class VideoPlayer extends Component {
  static propTypes = {
    src: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
  };

  myRef = React.createRef();

  // default props
  static defaultProps = {
    src: "",
    height: 560,
    width: 640
  };

  state = {
    videoId: "custom-video" + +new Date()
  };

  sources = {
      p720: {
          name: "720p",
          url: "https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4"
      },
      p480: {
          name: "480p",
          url: 'https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/Facebook.mp4'
      },
      p360: {
          name: "360p",
          url: 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4'
      }
  };

  // Initialize content
  UNSAFE_componentWillReceiveProps(props) {
    try {
      const { src } = props;
      if (!src || src === this.props.src) return;
      this.initVideo(src);
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    // Destroy the player
    if (this.player) {
      this.player.dispose();
    }
  }

  onClick = () => {
    console.log('helo');
  }

  getResolutions = () => {
      let data = [];
      for (const [key, value] of Object.entries(this.sources)) {
          data.push(<Dropdown.Item className="btn-sm border-bottom" name={key} eventKey={key}><small>{value.name}</small></Dropdown.Item>);
      }
      return data;
  }

  componentDidMount() {
    const dic = document.getElementsByClassName("vjs-control-bar");
    // console.log(dic[0].children[10]);

    /** 
    var pin = document.createElement("div"); // create new div
    pin.setAttribute("class", "Pin");
    const butt = <button onClick={this.onClick}>hello</button>

    pin.innerHTML = butt;

    var parentNode = document.getElementsByClassName("vjs-control-bar")[0];
    var childNode = document.getElementsByClassName("vjs-playback-rate")[0];

    parentNode.insertBefore(pin, childNode);
    */
  }

  onClickArrow =(e) => {
    const keyCode = e.keyCode;
    // console.log(this.player.volume(this.player.volume() * .5));
    // console.log(this.myRef.current.offsetParent.id);
    // this.myRef.current = <h1>hello</h1>;
    // console.log(this.myRef.current.props);
    this.setState(this.state);
    // this.myRef.current.offsetParent.appendChild(<button>hello</button>);

    
    const cT = this.player.currentTime();
    const cV = this.player.volume();

    switch(keyCode) {
      case 32:
        if(this.player.paused()) {
          this.player.play()
        }
        else {
          this.player.pause();
        }
        break;
      case 39:
        this.player.currentTime(cT + 10);
        break;
      case 37:
        this.player.currentTime(cT - 10);
        break;
      case 38:
        if(cV !== 1) {
          this.player.volume(cV + 0.1);
        }
        break;
      case 40:
        if(cV) {
          this.player.volume(cV - 0.1);
        }
        break;
    }
  }

  // initialize
  initVideo(src) {
    const { videoId } = this.state;
    const { height, width } = this.props;
    this.player = Videojs(videoId, {
      height,
      width,
      controls: true,
      timeControl: true,
      playbackRates: [1, 1.2, 1.5, 1.8, 2],
      seekable: true,
      seeking: true,
      controlBar: {
        controls: "EpisodeList"
      },
      preload: "auto",
      fluid: true
    });

    this.player.src('https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4');

    this.player.playlist =
      [
        {
          sources: [
            {
              src: 'https://d2wgekcgm4v3wq.cloudfront.net/c1/hls/Video-20210613_115757-Meeting+Recording_270p_qvbr.m3u8',
              type: 'video/mp4'
            }
          ],
            poster: ""
        }
      ]
      this.player.getChild('controlBar').addChild("EpisodeList", {})

    console.log(this.player.getChild('controlBar').children());
  
  }

  render() {
    const { videoId } = this.state;
    return (
      <div
        className="custom-video-warpper"
        style={{
          display: this.props.src ? "block" : "none"
        }}
        // onKeyPress={console.log}
      >
        {/* The className of the video tag must be "video-js", otherwise the style will not take effect */}
        <video
        //  onKeyPress={this.onClickArrow} 
          ref={this.myRef}
          onKeyDown={this.onClickArrow}
          id={videoId} 
          className="video-js"
        >
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
