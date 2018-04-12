import React from "react";
import NavigationBar from "../../components/NavigationBar";

it("renders correctly && matches snapshot", () => {
  const tree = shallow(<NavigationBar />);
  expect(tree).toMatchSnapshot();
});
