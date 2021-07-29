import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const but1 = screen.getByRole("button", { name: "Change to MidnightBlue" });

  expect(but1).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(but1);

  expect(but1).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(but1.textContent).toBe("Change to MediumVioletRed");
});

test("initial conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();
});

test("button disables on first click and enables on second click", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();

  expect(colorButton).toBeEnabled();
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
