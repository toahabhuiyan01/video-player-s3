import React, { Component } from "react";
import PropTypes from "prop-types";

import Videojs from "video.js";

// Add hls plug-in to guarantee to play m3u8 format video
import "videojs-contrib-hls";
import "video.js/dist/video-js.css";
import "./style.css";

window.videojs = Videojs;
import("video.js/dist/lang/zh-CN.js");

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

  onClickArrow =(e) => {
    const keyCode = e.keyCode;
    // console.log(this.player.volume(this.player.volume() * .5));
    console.log(this.myRef.current.offsetParent.childNodes[5].children(<p>hello</p>));
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
        getVideoPlaybackQuality: [src],
      },
      preload: "auto",
      fluid: true
    });

    this.player.src({ src });
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
          <button className="controlBar">hello</button>
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
