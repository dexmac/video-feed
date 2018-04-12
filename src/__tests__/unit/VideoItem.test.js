import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import VideoItem from "../../components/VideoItem";

it("renders correctly", () => {
    const tree = shallow(<VideoItem />);
    expect(tree).toMatchSnapshot();
});
