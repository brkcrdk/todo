import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

test("render Main component", () => {
  const { getByText } = render(<Main />);
  const headerElement = getByText(/Main page goes here/i);
  expect(headerElement).toBeInTheDocument();
});
