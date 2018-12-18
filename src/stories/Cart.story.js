import React from "react";
import { storiesOf } from "@storybook/react";
import { Cart } from "../pages/cart/cart";
import { MemoryRouter } from "react-router";
import jsonData from "../shared/data.json";
const items = jsonData;
const singleItem = [
  {
    id: 2,
    img:
      "https://cdn-images-1.medium.com/max/1600/1*juPyda3wq9uz_SNFRLuANg@2x.png",
    title: "Angular4-Boilerplate",
    description:
      "This The project provides a kick start for angular applications. The project build on top of the angular-cli project.",
    url: "https://github.com/stasrdv/Angular4-seed"
  }
];
storiesOf("Cart", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("single item", () => <Cart items={singleItem} />)
  .add("many items", () => <Cart items={items} />);
