import React from "react";
import { render, fireEvent } from "@testing-library/react";
import List from "./List";

const setup = () => {
  const utils = render(<List />);
  const list = utils.getByTestId(/list-container/i);
  return {
    list,
    ...utils
  };
};

test("should render ul", () => {
  const { list } = setup();
  expect(list).toBeInTheDocument();
});

test("should render todos", () => {
  const mockList = [{ job: "go" }, { job: "to" }, { job: "gym" }];
  const { getByTestId } = render(<List todos={mockList} />);
  const listContainer = getByTestId(/list-container/i);
  expect(listContainer.children.length).toBe(mockList.length);
});
