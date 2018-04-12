import React from "react";
import VideoItemHeader from "../../components/VideoItemHeader";

it("renders correctly && matches snapshot", () => {
  const tree = shallow(<VideoItemHeader />);
  expect(tree).toMatchSnapshot();
});
