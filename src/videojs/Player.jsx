import React, { Component } from "react";
import VideoPlayer from './index';


class AppForm extends Component {
  state = {
    videoUrl: ""
  };

  componentDidMount() {
    this.getVideoUrl();
  }

  // Get VideoUrl
  getVideoUrl = async () => {
    let videoUrl =
      "https://d2wgekcgm4v3wq.cloudfront.net/c1/hls/Video-20210613_115757-Meeting+Recording_270p_qvbr.m3u8";

    this.setState({ videoUrl });
  };

  render() {
    const { videoUrl } = this.state;

    return <VideoPlayer src={videoUrl} />;
  }
}

export default AppForm;
