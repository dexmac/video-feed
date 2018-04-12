import React from "react";
import jest from "jest-mock";
import VideoSourceSelect from "../../components/VideoSourceSelect";

it("renders correctly && matches snapshot", () => {
  const fetchVideosMock = jest.fn();
  const tree = shallow(
    <VideoSourceSelect fetchAndShowVideos={fetchVideosMock} />
  );
  expect(tree).toMatchSnapshot();
});
