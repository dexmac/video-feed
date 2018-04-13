import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import * as constants from "../constants/index.js";
import "react-select/dist/react-select.css";

class VideoSourceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedSources: [] };
  }

  /**
   * Handle Source selection change - refetching videos and displaying based on new filter
   * @param selectedOption
   */
  handleSourceSelectionChange = selectedSources => {
    if (typeof selectedSources === "object" && selectedSources.length) {
      // Updating select box to reflect new change
      this.setState({ selectedSources });

      // Filtering videos based on selected / empty source
      this.props.fetchAndShowVideos(selectedSources);
    }
  };

  render() {
    const selectedValues = this.state.selectedSources.map(
      source => source.value
    );

    return (
      <Select
        name="form-field-name"
        multi
        value={selectedValues}
        placeholder={constants.SELECT_VIDEO_SOURCE_PLACEHOLDER}
        onChange={this.handleSourceSelectionChange}
        options={[
          {
            value: constants.URL_VIDEO_SOURCE,
            label: constants.URL_VIDEO_SOURCE
          },
          {
            value: constants.YOUTUBE_VIDEO_SOURCE,
            label: constants.YOUTUBE_VIDEO_SOURCE
          },
          {
            value: constants.FACEBOOK_VIDEO_SOURCE,
            label: constants.FACEBOOK_VIDEO_SOURCE
          }
        ]}
      />
    );
  }
}

VideoSourceSelect.propTypes = {
  fetchAndShowVideos: PropTypes.func.isRequired // onchange handler, supplied by feed manager
};

export default VideoSourceSelect;
