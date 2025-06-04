import { render, screen, waitFor } from "@testing-library/react";

import MultipleRequests from "./MultipleRequests";
import axios from "axios";
import { vi } from "vitest";

// Mock axios
vi.mock("axios");

const mockFirstData = [
  { id: "1", name: "Alpha" },
  { id: "2", name: "Bravo" },
];

const mockSecondData = [
  { id: "1", words: "Sunshine" },
  { id: "2", words: "Raindrop" },
];

describe("MultipleRequests", () => {
  beforeEach(() => {
    axios.get
      .mockResolvedValueOnce({ data: mockFirstData })
      .mockResolvedValueOnce({ data: mockSecondData });
  });

  it("fetches and displays data from two endpoints", async () => {
    render(<MultipleRequests />);

    // Wait for the async data to load
    await waitFor(() => {
      // FirstData section
      expect(screen.getByText("First Data")).toBeInTheDocument();
      expect(screen.getByText("Alpha")).toBeInTheDocument();
      expect(screen.getByText("Bravo")).toBeInTheDocument();

      // SecondData section
      expect(screen.getByText("Second Data")).toBeInTheDocument();
      expect(screen.getByText("Sunshine")).toBeInTheDocument();
      expect(screen.getByText("Raindrop")).toBeInTheDocument();
    });
  });
});
