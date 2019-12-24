import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Item from "./Item";
const setup = () => {
  const utils = render(<Item />);
  return {
    ...utils
  };
};

test("render item container", () => {
  const { getByTestId } = setup();
  const item = getByTestId(/itemContainer/i);
  expect(item).toBeInTheDocument();
});
