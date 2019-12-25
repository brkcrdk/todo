import React from "react";
import { render } from "@testing-library/react";
import Item from "./Item";

const setup = () => {
  const utils = render(<Item />);
  return { ...utils };
};

test("should render input", () => {});
test("should render add button", () => {});
