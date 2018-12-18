import React from "react";
import { storiesOf } from "@storybook/react";

import HomePage from "../pages/home/home";

const info =
  "orci magnis justo sit felis amet quam nam risus ut dui in ridiculus purus quam elit elit id sapien malesuada amet etiam posuere vestibulum lectus dolor vestibulum etiam phasellus auctor";
storiesOf("HomePage", module)
  .add("default", () => <HomePage />)
  .add("additional information", () => <HomePage info={info} />);
