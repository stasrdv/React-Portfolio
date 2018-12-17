import React from "react";
import App from "./App";
import { storiesOf } from "@storybook/react";

storiesOf("MyComponent", module)
  .addDecorator(story => <div style={{ textAlign: "center" }}>{story()}</div>)
  .add("without props", () => <App />);
// .add("with some props", () => <App text="The Comp" />);
