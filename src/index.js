import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormikEx from './prac-formik';
import ViedoJs from './videojs';
import VideoApp from './videojsPlayer';
import ReactPlayero from './reactplayer';
import PlayerControlExample from './components/react-player';
import VideoJsPlayer from './components/VideoJsPlayer';
import PlayerUpdate from './components/ReactPlayerUpdate';

import HLS from './videojs/Player';

ReactDOM.render(
  <React.StrictMode>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
      
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    {/* <App /> */}
    {/* <FormikEx /> */}
    {/* <ViedoJs /> */}
    {/* <VideoApp /> */}
    {/* <ReactPlayero /> */}
    {/* <Videotest /> */}

    {/* <PlayerControlExample /> */}
    {/* <PlayerUpdate /> */}

    <HLS />

    {/* <VideoJsPlayer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
