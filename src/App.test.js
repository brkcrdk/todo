import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders button", () => {
  const { getByText } = render(<App />);
  const buttonLabel = getByText(/Your first/i);
  const buttonElement = getByText(/My first test/i);

  expect(buttonLabel).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
