import React from 'react';
import videojs from 'video.js';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';

function App() {
  const playerOptions = {
    src: 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4',
    controls: true, 
    autoplay: "play",
  };
  const videojsOptions = {
    fluid: true,
  };

  return (
      <div style={{ width: "60%" }}>
          <VREPlayer
            playerOptions={playerOptions}
            videojsOptions={videojsOptions}
            onReady={(player) => console.log(player)}
            onPlay={(e, _, second) => console.log('Play!')}
            onPause={(e, _, second) => console.log('Pause!')}
            onEnded={(e, _) => console.log('Ended!')}
        />
    </div>
  );
}

export default App;