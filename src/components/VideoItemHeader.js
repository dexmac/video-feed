import React, { Component } from "react";
import VideoItemTitle from "./VideoItemTitle";
import VideoItemViewsNumber from "./VideoItemViewsNumber";
import PropTypes from "prop-types";

class VideoItemHeader extends Component {
  render() {
    const { title, views } = this.props;

    return (
      <div className="video-item-header">
        <VideoItemTitle className="video-item-title" title={title} />
        <VideoItemViewsNumber
          className="video-item-views-number"
          viewsNumber={views}
        />
      </div>
    );
  }
}

VideoItemHeader.propTypes = {
  title: PropTypes.string,
  views: PropTypes.number
};

export default VideoItemHeader;
