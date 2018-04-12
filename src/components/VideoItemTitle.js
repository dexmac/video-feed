import React, { Component } from "react";
import PropTypes from "prop-types";

class VideoItemTitle extends Component {
  render() {
    const title = this.props.title;

    return <div className="video-item-title">{title}</div>;
  }
}

VideoItemTitle.propTypes = {
  title: PropTypes.string
};

export default VideoItemTitle;
