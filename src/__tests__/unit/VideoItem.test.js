import React from "react";
import VideoItem from "../../components/VideoItem";
import VideoItemHeader from "../../components/VideoItemHeader";
import ReactPlayer from "react-player";

describe("VideoItem", () => {
  let props;
  let mountedVideoItem;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      item: {}
    };
    mountedVideoItem = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<VideoItem />);
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoItem = () => {
    if (!mountedVideoItem) {
      mountedVideoItem = mount(<VideoItem {...props} />);
    }
    return mountedVideoItem;
  };

  describe("when `title` is defined", () => {
    beforeEach(() => {
      props.item.title = "myTitle";
    });

    it("sets the rendered text to the same value as `title`", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().title).toBe(props.item.title);
    });
  });

  describe("when `title` is undefined", () => {
    beforeEach(() => {
      props.item.title = undefined;
    });

    it("sets the rendered text to empty", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().title).toBe("");
    });
  });

  describe("when `views` is defined", () => {
    beforeEach(() => {
      props.item.views = 12345;
    });

    it("sets the rendered text to the same value as `views`", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().views).toBe(props.item.views);
    });
  });

  describe("when `views` is undefined", () => {
    beforeEach(() => {
      props.item.views = undefined;
    });

    it("sets the rendered text to empty", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().views).toBe(null);
    });
  });

  describe("when `url` is defined", () => {
    beforeEach(() => {
      props.item.url = "myURL";
    });

    it("sets the rendered text to the same value as `url`", () => {
      const player = videoItem().find(ReactPlayer);
      expect(player.props().url).toBe(props.item.url);
    });
  });

  describe("when `url` is undefined", () => {
    beforeEach(() => {
      props.item.url = undefined;
    });

    it("sets the rendered text to be undefined", () => {
      const player = videoItem().find(ReactPlayer);
      expect(player.props().url).toBe(undefined);
    });
  });

  describe("when an item is rendered", () => {
    it("always renders wrapper div around video player", () => {
      const wrapperDiv = videoItem().find("div.player-wrapper");
      expect(wrapperDiv.length).toBe(1);
    });

    it("always renders a react player first", () => {
      const player = videoItem().find(ReactPlayer);
      expect(player.length).toBe(1);
    });
  });

  describe("On video load error", () => {
    it("doesn't render a react-player", () => {
      const myVideoItem = videoItem();
      let player = myVideoItem.find(ReactPlayer);
      player.instance().props.onError("error");
      myVideoItem.update();
      player = myVideoItem.find(ReactPlayer);
      expect(player.length).toBe(0);
    });

    it("should render an error message div", () => {
      const myVideoItem = videoItem();
      const player = myVideoItem.find(ReactPlayer);
      props.item = null;
      player.instance().props.onError();
      myVideoItem.update();
      const errorDiv = myVideoItem.find("div.video-load-error-text");
      expect(errorDiv.length).toBe(1);
    });
  });
});
