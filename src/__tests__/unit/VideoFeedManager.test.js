import React from "react";
import VideoFeedManager from "../../containers/VideoFeedManager";

it("renders correctly && matches snapshot", () => {
  const tree = shallow(<VideoFeedManager />);
  expect(tree).toMatchSnapshot();
});
