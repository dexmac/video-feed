import React, { Component } from "react";
import ReactPlayer from "react-player";
import VideoItemHeader from "./VideoItemHeader";
import { ERR_LOADING_VIDEO_PREFIX } from "../constants";

class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowVideo: true,
      errorString: ""
    };
  }

  onVideoError = url => {
    this.setState({ shouldShowVideo: false, errorString: url });
  };

  render() {
    const item = this.props.item;

    let VideoPlayer;
    if (this.state.shouldShowVideo) {
      VideoPlayer = (
        <ReactPlayer
          className="react-player"
          url={item ? item.url : null}
          key={item ? item.videoId : null}
          width="100%"
          height="100%"
          onError={() => this.onVideoError(item ? item.url : null)}
          playing
          muted
          playsinline
        />
      );
    } else {
      // On Video Load Error
      VideoPlayer = (
        <div className="video-load-error-text">
          {ERR_LOADING_VIDEO_PREFIX} : {this.state.errorString}
        </div>
      );
    }

    return (
      <div className="video-item">
        <VideoItemHeader {...this.props} />
        <div className="player-wrapper">{VideoPlayer}</div>
      </div>
    );
  }
}

export default VideoItem;
