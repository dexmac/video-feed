import React from "react";
import VideoItem from "../../components/VideoItem";

it("renders correctly && matches snapshot", () => {
  const tree = shallow(<VideoItem />);
  expect(tree).toMatchSnapshot();
});
