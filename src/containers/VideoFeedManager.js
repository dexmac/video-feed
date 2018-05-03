import React, { Component } from "react";
import VideoFeed from "../components/VideoFeed";
import VideoSourceSelect from "../components/VideoSourceSelect";
import { fetchJSON } from "../helpers/fetchJSON";
import * as constants from "../constants/index.js";

class VideoFeedManager extends Component {
  state = {
    items: [],
    shouldShowFeed: true,
    errorString: ""
  };

  /**§
   * Returns a proper video URL for playback by ReactPlayer component
   * @param item
   * @returns {string}
   */
  videoItemURLBySource(item) {
    switch (item.source) {
      case constants.FACEBOOK_VIDEO_SOURCE:
        return `${constants.FACEBOOK_VIDEO_URL_PREFIX}${item.videoId}/`;
      case constants.YOUTUBE_VIDEO_SOURCE:
        return `${constants.YOUTUBE_VIDEO_URL_PREFIX}${item.videoId}/`;
      case constants.URL_VIDEO_SOURCE:
        return item.url ? item.url : constants.ERR_MISSING_URL_IN_FEED;
      default:
        return constants.ERR_UNKNOWN_VIDEO_SOURCE + " - " + item.source;
    }
  }

  /**
   * Preparing Video URLs and setting state when done to show videos
   * @param items : object (video items array)
   */
  prepareVideoItemURLs(items) {
    items.map(
      item => (item.url = item.url ? item.url : this.videoItemURLBySource(item))
    );

    this.setState({ items: items });
  }

  /**
   * Updating state in case of feed fetch error
   * @param err : string
   * @param feedFetchURL : string
   */
  onFeedFetchError = (err, feedFetchURL) => {
    if (!this.videoFeedFetchPromise.isCancelled()) {
      this.setState({
        shouldShowFeed: false,
        errorString: err + " - " + feedFetchURL
      });
    }
  };

  /**
   * Fetching videos from feed endpoint + filter in query string & preparing videos for display
   * @param selectedSources - array - types to filter videos by - can be: '' / url / youtube / facebook
   */
  fetchVideos = (selectedSources = []) => {
    const sourcesToFilter = selectedSources.map(source => source.value);
    const videoEndpointQueryString = selectedSources.length
      ? "?" +
        constants.QUERY_STRING_PARAM_SOURCES_ON_SERVER +
        "=" +
        sourcesToFilter.join(",")
      : "";
    const feedFetchURL =
      constants.VIDEO_FEED_ENDPOINT + videoEndpointQueryString;

    // Keeping a ref. to videoFeedFetchPromise due to need to cancel the fetch on component un-mounting
    this.videoFeedFetchPromise = fetchJSON(feedFetchURL);
    this.videoFeedFetchPromise
      .then(response => {
        this.prepareVideoItemURLs(
          response && response.items ? response.items : []
        );
      })
      .catch(err => {
        this.onFeedFetchError(err, feedFetchURL);
      });
  };

  /**
   * Video feed component entry point
   */
  componentDidMount() {
    this.fetchVideos();
  }

  componentWillUnmount() {
    this.videoFeedFetchPromise.cancel();
  }

  render() {
    let Feed;
    if (this.state.shouldShowFeed) {
      // Populating feed items
      Feed = <VideoFeed items={this.state.items} />;
    } else {
      Feed = (
        <div className="video-load-error-text">{this.state.errorString}</div>
      );
    }

    return (
      <div className="video-feed-container">
        <VideoSourceSelect fetchVideos={this.fetchVideos} />
        {Feed}
      </div>
    );
  }
}

export default VideoFeedManager;
