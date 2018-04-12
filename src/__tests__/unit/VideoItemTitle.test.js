import React from "react";
import VideoItemTitle from "../../components/VideoItemTitle";

it("renders correctly && matches snapshot", () => {
  const tree = shallow(<VideoItemTitle />);
  expect(tree).toMatchSnapshot();
});
