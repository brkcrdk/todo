import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

const setup = () => {
  const utils = render(<Main />);
  const main = utils.getByLabelText("todo-input");
  return {
    main,
    ...utils
  };
};
test("render Main components header", () => {
  const { getByText } = setup();
  const headerElement = getByText(/Main page goes here/i);
  expect(headerElement).toBeInTheDocument();
});
