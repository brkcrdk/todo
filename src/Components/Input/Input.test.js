import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";
test("renders input", () => {
  const { getByTestId } = render(<Input />);
  const inputElement = getByTestId(/inputElement/i);
  expect(inputElement).toBeInTheDocument();
});
