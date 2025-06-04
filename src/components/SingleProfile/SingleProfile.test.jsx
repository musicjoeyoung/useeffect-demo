import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

import SingleProfile from "./SingleProfile";
import axios from "axios";
import { vi } from "vitest";

// Mock axios
vi.mock("axios");

const mockProfile = {
  id: "1",
  firstName: "Jane",
  lastName: "Doe",
  phoneNumber: "123-456-7890",
  address: "123 Main St",
  image: "https://example.com/jane.jpg",
};

describe("SingleProfile", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockProfile });
  });

  it("fetches and displays a single profile", async () => {
    render(
      <MemoryRouter initialEntries={["/singleProfile/1"]}>
        <Routes>
          <Route path="/singleProfile/:profileId" element={<SingleProfile />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Single Profile")).toBeInTheDocument();
      expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
      expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
      expect(screen.getByAltText("profile photo")).toBeInTheDocument();
    });
  });
});
