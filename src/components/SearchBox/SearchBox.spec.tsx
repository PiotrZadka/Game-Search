import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

test("Renders a button", () => {
  render(<SearchBox />);
  const linkElement = screen.getByTestId("inputGameTextField");
  expect(linkElement).toBeInTheDocument();
});

test("Renders an input box", () => {
  render(<SearchBox />);
  const linkElement = screen.getByRole("button", { name: /Search/i });
  expect(linkElement).toBeInTheDocument();
});
