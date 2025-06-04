import { render, screen, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Profiles from "./Profiles";
import axios from "axios";
import { vi } from "vitest";

// Mock axios
vi.mock("axios");

const mockProfiles = [
  { id: "1", firstName: "Alice", lastName: "Johnson" },
  { id: "2", firstName: "Bob", lastName: "Smith" },
];

describe("Profiles", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockProfiles });
  });

  it("renders profiles fetched from API", async () => {
    render(
      <MemoryRouter>
        <Profiles />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
      expect(screen.getByText("Bob Smith")).toBeInTheDocument();
    });
  });
});
