import React from "react";
import { shallow } from "enzyme";
import { PorfolioBoard } from "./portfoliob-board";
import jsonData from "../../shared/data.json";

const items = jsonData;
describe("PorfolioBoard component", () => {
  test("should shallow correctly", () => {
    expect(shallow(<PorfolioBoard items={0} />)).toMatchSnapshot();
  });
});
