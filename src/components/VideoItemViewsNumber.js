import React, { Component } from "react";
import PropTypes from "prop-types";

class VideoItemViewsNumber extends Component {
  render() {
    const VIEWS_TITLE = "Views: ";
    const viewsNumber = this.props.viewsNumber;

    return (
      <div className="video-item-views-number">
        {viewsNumber ? VIEWS_TITLE + viewsNumber : ""}
      </div>
    );
  }
}

VideoItemViewsNumber.propTypes = {
  title: PropTypes.number
};

export default VideoItemViewsNumber;
