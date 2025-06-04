import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders navbar and routes without crashing", () => {
    render(<App />);

    expect(screen.getByText("Profiles")).toBeInTheDocument();
    expect(screen.getByText("Examples")).toBeInTheDocument();
    expect(screen.getByText("Multiple Requests")).toBeInTheDocument();
  });
});
