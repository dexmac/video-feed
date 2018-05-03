import React from "react";
import VideoFeed from "../../components/VideoFeed";
import VideoItem from "../../components/VideoItem";

describe("VideFeed", () => {
  let props;
  let mountedVideoFeed;
  let items;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    mountedVideoFeed = undefined;
    items = [
      {
        title: "Big Buck Bunny",
        type: "video",
        source: "url",
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        views: 8820
      }
    ];
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<VideoFeed />);
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoFeed = items => {
    if (!mountedVideoFeed) {
      mountedVideoFeed = mount(<VideoFeed items={items} />);
    }
    return mountedVideoFeed;
  };

  describe("when no items are loaded in the feed", () => {
    it("should display an empty feed, i.e., feed length should be 0`", () => {
      const myFeed = videoFeed();
      expect(myFeed.find(VideoItem).length).toBe(0);
    });
  });

  it("should display a video item feed with 1 element and match the snapshot`", function() {
    let myFeedManager = videoFeed(items);
    expect(myFeedManager).toMatchSnapshot();
    expect(myFeedManager.find(VideoItem).length).toBe(1);
  });
});
