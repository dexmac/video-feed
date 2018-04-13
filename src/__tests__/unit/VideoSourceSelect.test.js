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
      fetchAndShowVideos: undefined
    };
    mountedVideoSourceSelect = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const fetchVideosMock = jest.fn();
    const tree = shallow(
      <VideoSourceSelect fetchAndShowVideos={fetchVideosMock} />
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

  describe("when `fetchAndShowVideos` method is defined and a source has been selected", () => {
    beforeEach(() => {
      props.fetchAndShowVideos = jest.fn(() => {});
      const videoSelect = videoSourceSelect();
      videoSelect.instance().handleSourceSelectionChange(["url"]);
    });

    it("calls the fetchAndShowVideos method", () => {
      const videoSelect = videoSourceSelect();
      expect(
        videoSelect.instance().props.fetchAndShowVideos
      ).toHaveBeenCalled();
    });
  });

  describe("when `fetchAndShowVideos` method is defined and a source has been selected", () => {
    beforeEach(() => {
      props.fetchAndShowVideos = jest.fn(() => {});
      const videoSelect = videoSourceSelect();
      videoSelect.instance().handleSourceSelectionChange(undefined);
    });

    it("calls the fetchAndShowVideos method", () => {
      const videoSelect = videoSourceSelect();
      expect(
        videoSelect.instance().props.fetchAndShowVideos
      ).not.toHaveBeenCalled();
    });
  });
});
