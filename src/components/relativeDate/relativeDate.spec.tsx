import moment from "moment";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { RelativeDate } from "./relativeDate";

describe("RelativeDate", () => {
  const TODAY = moment();

  afterEach(cleanup);

  test("render", () => {
    render(<RelativeDate />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("display Today output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();
    
    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();
    
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    user.type(input, TODAY.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("Today"));
  });

  test("display Yesterday output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(1, "day");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("Yesterday"));
  });

  test("display This week output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(6, "days");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("This week"));
  });

  test("display Last week output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(7, "days");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("Last week"));
  });

  test("display This month output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(14, "days");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("This month"));
  });

  test("display Last month output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(1, "month");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("Last month"));
  });

  test("display This year output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(2, "month");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("This year"));
  });

  test("display Last year output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(1, "year");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("Last year"));
  });

  test("display Long time ago output", async () => {
    render(<RelativeDate />);

    const input = screen.getByTestId("input-date");
    expect(input).toBeInTheDocument();

    const output = screen.getByTestId("output-message");
    expect(output).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const newValue = TODAY.clone().subtract(2, "year");

    user.type(input, newValue.format("YYYY-MM-DD").toString());
    user.click(button);

    await waitFor(() => expect(output.textContent).toBe("Long time ago"));
  });

});
