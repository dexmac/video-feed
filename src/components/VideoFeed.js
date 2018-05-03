import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoItem from "../components/VideoItem";

class VideoFeed extends Component {
  render() {
    let feedItems = this.props.items ? this.props.items : [];
    return (
      <div className="video-feed">
        {feedItems.map((item, i) => {
          return <VideoItem item={item} key={i} />;
        })};
      </div>
    );
  }
}

VideoFeed.propTypes = {
  items: PropTypes.array
};

export default VideoFeed;
