import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Main page", () => {
  const { getByTestId } = render(<App />);
  const mainComponent = getByTestId(/main-container/gi);
  expect(mainComponent).toBeInTheDocument();
});
