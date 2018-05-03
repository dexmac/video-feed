import React from "react";
import jest from "jest-mock";
import VideoSourceSelect from "../../components/VideoSourceSelect";

describe("VideoSourceSelect", () => {
  let props;
  let mountedVideoSourceSelect;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      fetchVideos: undefined
    };
    mountedVideoSourceSelect = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const fetchVideosMock = jest.fn();
    const tree = shallow(
      <VideoSourceSelect fetchVideos={fetchVideosMock} />
    );
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoSourceSelect = () => {
    if (!mountedVideoSourceSelect) {
      mountedVideoSourceSelect = mount(<VideoSourceSelect {...props} />);
    }
    return mountedVideoSourceSelect;
  };

  describe("when `fetchVideos` method is defined and a source has been selected", () => {
    beforeEach(() => {
      props.fetchVideos = jest.fn(() => {});
      const videoSelect = videoSourceSelect();
      videoSelect.instance().handleSourceSelectionChange(["url"]);
    });

    it("calls the fetchVideos method", () => {
      const videoSelect = videoSourceSelect();
      expect(
        videoSelect.instance().props.fetchVideos
      ).toHaveBeenCalled();
    });
  });

  describe("when `fetchVideos` method is defined and a source has been selected", () => {
    beforeEach(() => {
      props.fetchVideos = jest.fn(() => {});
      const videoSelect = videoSourceSelect();
      videoSelect.instance().handleSourceSelectionChange(undefined);
    });

    it("calls the fetchVideos method", () => {
      const videoSelect = videoSourceSelect();
      expect(
        videoSelect.instance().props.fetchVideos
      ).not.toHaveBeenCalled();
    });
  });
});
