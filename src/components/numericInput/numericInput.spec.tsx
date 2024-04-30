import { render, screen, cleanup, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { NumericInput } from "./numericInput";

describe("NumericInput", () => {
  afterEach(cleanup);

  test("render", () => {
    render(<NumericInput />)
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("only numeric values", () => {
    render(<NumericInput />);
    const input = screen.getByRole("textbox");
    user.click(input);
    user.keyboard("1a");
    expect(input).toHaveValue("1");
  });

  test("leading zero with first char is .", async () => {
    render(<NumericInput />);
    const input = screen.getByRole("textbox");
    user.click(input);
    user.keyboard("0.1");
    user.click(screen.getByTestId("numeric-input"));
    await waitFor(() => expect(input).toHaveValue("0.1"));
  });

  test("non leading zero", async () => {
    render(<NumericInput />);
    const input = screen.getByRole("textbox");
    user.click(input);
    user.keyboard("001");
    user.click(screen.getByTestId("numeric-input"));
    await waitFor(() => expect(input).toHaveValue("1"));
  });

  test("show error message", () => {
    render(<NumericInput />);
    const input = screen.getByRole("textbox");
    user.click(input);
    user.keyboard("1a");
    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });
});