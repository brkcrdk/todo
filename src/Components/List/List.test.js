import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

const setup = () => {
  const utils = render(<List />);
  return {
    ...utils
  };
};

test("should render ul", () => {});

test("should render list when clicked", () => {});
