import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const but1 = screen.getByRole("button", { name: "Change to blue" });

  expect(but1).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(but1);

  expect(but1).toHaveStyle({ backgroundColor: "blue" });

  expect(but1.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();
});

test("button disables on first click and enables on second click", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();

  expect(colorButton).toBeEnabled();
});
