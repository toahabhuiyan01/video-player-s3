import React, { Component } from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const sources = {
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

export class ReactPlayerUpdate extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            source: sources.p720.url,
            lastTime: 0,
        }

        this.onPauseVideo = this.onPauseVideo.bind(this);
    }

    componentDidMount() {
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state) {
        this.setState({
            player: state
        });
    }

    onPauseVideo = (e) => {
        console.log(e.target.currentTime);
    }

    getResolutions = () => {
        let data = [];
        for (const [key, value] of Object.entries(sources)) {
            data.push(<Dropdown.Item className="btn-sm border-bottom" onClick={this.onClickResolution} name={key} eventKey={key}><small>{value.name}</small></Dropdown.Item>);
        }
        return data;
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state.source);
        if (prevState.source !== this.state.source) {
            this.player.play();
        }
    }

    onClickResolution = (e) => {
        const { name } = e.target;
        const { player } = this.player.getState();
        const time = player.currentTime;
        console.log(e)

        this.setState({ source: sources[name].url });
        this.player.load();
        this.player.seek(time);
    }
    

    render() {
        return (
            <div style={{width: "60%"}}>
                <Player
                    ref={player => {
                        this.player = player;
                    }}
                    poster=""
                    onChange={console.log}
                    onStart={console.log}
                    onDuration={console.log}
                    onPause={this.onPauseVideo}
                    autoPlay
                    muted
                >
                    <source src={this.state.source} />
                    <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={10} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[2, 1.75, 1.50, 1.25, 1, 0.5]} order={7.1} />
                        <VolumeMenuButton />
                        <div order={7.2} style={{marginTop: "4px"}}>
                            <DropdownButton
                                as={ButtonGroup}
                                drop={"up"}
                                variant="secondary"
                                title={<FontAwesomeIcon icon={faCog} />}
                            >

                                {
                                    this.getResolutions().map((drop, idx) => {
                                        return drop;
                                    })
                                }
                            </DropdownButton>
                        </div>
                    </ControlBar>
                </Player>
            </div>
        );
    }
}

export default ReactPlayerUpdate;




// export default props => {
//   return (
//     <Player
//         poster=""
//           onStart={console.log}
//           onPause={console.log}
//       >
//         <source src="https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4" />

//         <ControlBar>
//             <ReplayControl seconds={10} order={1.1} />
//             <ForwardControl seconds={10} order={1.2} />
//             <CurrentTimeDisplay order={4.1} />
//             <TimeDivider order={4.2} />
//             <PlaybackRateMenuButton rates={[2, 1.75, 1.50, 1.25, 1, 0.5]} order={7.1} />
//             <VolumeMenuButton />
//         </ControlBar>
//     </Player>
//   );
// };
