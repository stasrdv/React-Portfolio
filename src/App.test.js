import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { storiesOf } from "@storybook/react";

describe("App Component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it("should render", () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});
