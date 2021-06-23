import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
import { Button } from 'reactstrap';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

let videoSourse = [{
            src: 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4',
            type: 'video/mp4',
            label: '480'
        }, {
            src: 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4',
            type: 'video/mp4',
            label: '720'
  }
];

export default class PlayerControlExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
      this.player.subscribeToStateChange(this.handleStateChange.bind(this));
      this.player.seek(50);
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
      this.player.load();
      this.player.seek(50);
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.player.load();
    };
  }

  render() {
    return (
      <div className="mt-5">
            <div style={{width:"60%"}}>
          <Player
            onReady={console.log}
            onStart={console.log}
            onPause={console.log}
            onEnded={console.log}
            onError={console.log}
            onDuration={console.log}
            ref={player => {
              this.player = player;
            }}
            autoPlay
            muted
            
                    // sources={videoSourse}
                >
                        {/* <source src={this.state.source} /> */}
                        <source src={videoSourse[0].src} />
                    <ControlBar autoHide={true}>
                        <button className="float-right">hdd</button>
                </ControlBar>
                </Player>
            </div>

            <input
                type="file"
                onChange={e => console.log(e.target)}
            />
        <div className="p-5">
          <Button onClick={this.play} className="mr-3">
            play
          </Button>
          <Button onClick={this.pause} className="mr-3">
            pause
          </Button>
          <Button onClick={this.load} className="mr-3">
            load
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeCurrentTime(10)} className="mr-3">
            currentTime + 10 sec
          </Button>
          <Button onClick={this.changeCurrentTime(-10)} className="mr-3">
            currentTime - 10 sec
          </Button>
          <Button onClick={this.seek(50)} className="mr-3">
            currentTime 20 sec
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changePlaybackRateRate(1)} className="mr-3">
            playbackRate + 1
          </Button>
          <Button onClick={this.changePlaybackRateRate(-1)} className="mr-3">
            playbackRate - 1
          </Button>
          <Button onClick={this.changePlaybackRateRate(0.1)} className="mr-3">
            playbackRate + 0.1
          </Button>
          <Button onClick={this.changePlaybackRateRate(-0.1)} className="mr-3">
            playbackRate - 0.1
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeVolume(0.1)} className="mr-3">
            volume + 0.1
          </Button>
          <Button onClick={this.changeVolume(-0.1)} className="mr-3">
            volume - 0.1
          </Button>
          <Button onClick={this.setMuted(true)} className="mr-3">
            mute
          </Button>
          <Button onClick={this.setMuted(false)} className="mr-3">
            unmute
          </Button>
        </div>
        <div className="pb-3 mb-5 mt-5">
          <Button onClick={this.changeSource('sintelTrailer')} className="mr-3">
            480p
          </Button>
          <Button onClick={this.changeSource('bunnyTrailer')} className="mr-3">
            720p
          </Button>
          <Button onClick={this.changeSource('bunnyMovie')} className="mr-3">
            1080p
          </Button>
        </div>
        <div>Current State of Player</div>
        <pre>
          {/* <PrismCode className="language-json"> */}
            {JSON.stringify(this.state.player, null, 2)}
          {/* </PrismCode> */}
        </pre>
      </div>
    );
  }
}
