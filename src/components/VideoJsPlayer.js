import React from 'react';
import VideoPlayer from 'react-video-js-player';

function VideoJsPlayer() {
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        mute:true,
        aspectRatio: "16:9",
        playbackRates: [0.5, 1, 1.5, 2],
        seek: 50
    };
    let videoSourse = [{
            src: 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4',
            type: 'video/mp4',
            label: '480'
        }, {
            src: 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4',
            type: 'video/mp4',
            label: '720'
        }];
    
    return (
        <div> 
            <VideoPlayer
                ref={val => console.log(val)}
                {...videoJsOptions}
                // onPlayerPlay={this.onPlayerPlay}
                // onPlayerEnd={onPlayerEnd}
                sources={videoSourse}
                // src='https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4'
            />
        </div>
    )
}

export default VideoJsPlayer
