import './App.css';
import React, { useState } from 'react';
import Amplify, { Storage } from 'aws-amplify';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';


// Amplify.configure({
//   Auth: {
//     identityPoolId: 'us-west-2:c7e8d889-f70a-4b89-beb0-28121bf5b7d7',
//     region: 'us-west-2',
//   },
//   Storage: {
//     AWSS3: {
//       bucket: "shadhintesttoaha",
//       region: 'us-west-2',
//     }
//   }
// });

Amplify.configure({
  Auth: {
    identityPoolId: 'us-west-2:f5d5f4a1-627b-4eeb-99c2-fb7c988823ed',
    region: 'us-west-2',
  },
  Storage: {
    AWSS3: {
      bucket: "ct-all-bucket-development",
      region: 'us-west-2',
    }
  }
});

function App() {
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [success, setSuccess] = useState(false);

  const onSelectFile = (e) => {
    e.preventDefault();
    const currentFile = e.target.files[0];
    console.log(e.target.files[0]);
    setFile(currentFile);
  }

  const onUploadFile = (e) => {
    e.preventDefault();
    if (file) {
      setSuccess(false);
      Storage.put(file.name, file, {
        progressCallback(progress) {
          // console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setPercent(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      })
        .then(res => {
          console.log(res)
          setSuccess(true);
          setPreviewImage(file.name);
        })
        .catch(err => console.log(err));
      }
  }
 
  return (
    <div className="App">
      <div>
        {/* <Player ref={(player) => { this.player = player }}>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player> */}
        {/* <div>{percent}</div> */}
        {/* {success && <img src={"https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/" + previewImage} alt="faliled to load" />} */}
         {/* <video width="320" height="240" controls>
          <source src="https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/CT-AdminPanel-Automation.webm" type="video/mp4" />
        </video>  */}
        <div className="video">
          <Player
            ref={(player) => { console.log(player.getState().currentTime) }}
            playsInline
            poster="/assets/poster.png"
            src="https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4"
          />
        </div>
      </div>
      {/* <div>
        <input type="file" onChange={onSelectFile} />
      <button onClick={(e) => onUploadFile(e)} >Upload</button>
      </div> */}
      
    </div>
  );
}

export default App;
