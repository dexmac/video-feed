import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import VideoItemHeader from "./VideoItemHeader";
import { ERR_LOADING_VIDEO_PREFIX } from "../constants";

class VideoItem extends Component {
  state = {
    shouldShowVideo: true,
    errorString: ""
  };

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
          config={{ file: { forceVideo: true } }}
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
        <VideoItemHeader
          title={item && item.title ? item.title : ""}
          views={item && item.views ? item.views : null}
        />
        <div className="player-wrapper">{VideoPlayer}</div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    source: PropTypes.string,
    videoId: PropTypes.string,
    title: PropTypes.string,
    views: PropTypes.number
  })
};
export default VideoItem;
