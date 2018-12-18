import React from "react";
import { storiesOf } from "@storybook/react";
import AboutPage from "../pages/about/about";

storiesOf("AboutPage", module)
  .add("without props", () => <AboutPage />)
  .add("with different name", () => <AboutPage name={"John"} />);
