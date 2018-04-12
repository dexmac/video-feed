import React from "react";
import VideoItemViewsNumber from "../../components/VideoItemViewsNumber";

it("renders correctly && matches snapshot", () => {
  const tree = shallow(<VideoItemViewsNumber />);
  expect(tree).toMatchSnapshot();
});
