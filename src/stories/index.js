import React from "react";
import { storiesOf } from "@storybook/react";
import App from "../App";

storiesOf("MyComponent", module)
  .add("without props", () => <App />)
  .add("with some props", () => <App text="The Comp" />);
