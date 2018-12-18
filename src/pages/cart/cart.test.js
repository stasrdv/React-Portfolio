import React from "react";
import { shallow } from "enzyme";
import { Cart } from "./Cart";

import jsonData from "../../shared/data.json";

const items = jsonData;
describe("Cart component", () => {
  test("should shallow correctly", () => {
    expect(shallow(<Cart items={items} />)).toMatchSnapshot();
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Cart items={items} debug />);
    expect(component).toMatchSnapshot();
  });
});
