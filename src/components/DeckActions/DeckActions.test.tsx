import { render, screen, fireEvent } from "@testing-library/react";
import { DeckActions } from "./DeckActions";

const mockShuffle = jest.fn();
const mockSort = jest.fn();
const mockDraw = jest.fn();
const mockReset = jest.fn();

describe("DeckActions Component", () => {
  test("renders the action panel successfully in a default state", () => {
    render(
      <DeckActions
        cardLength={4}
        shuffle={mockShuffle}
        sort={mockSort}
        draw={mockDraw}
        reset={mockReset}
      />
    );

    expect(screen.getByText("Deck Actions")).toBeInTheDocument();
    expect(screen.getByText("Shuffle")).toBeInTheDocument();
    expect(screen.getByText("Sort")).toBeInTheDocument();
    expect(screen.getByText("Draw")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  test("calls action buttons when card length is greater than 0", () => {
    render(
      <DeckActions
        cardLength={52}
        shuffle={mockShuffle}
        sort={mockSort}
        draw={mockDraw}
        reset={mockReset}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Shuffle" }));
    expect(mockShuffle).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Sort" }));
    expect(mockSort).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Draw" }));
    expect(mockDraw).toHaveBeenCalled();

    expect(screen.getByRole("button", { name: "Reset" })).toBeDisabled();
  });

  test("calls reset when card length is 0", () => {
    render(
      <DeckActions
        cardLength={0}
        shuffle={mockShuffle}
        sort={mockSort}
        draw={mockDraw}
        reset={mockReset}
      />
    );

    expect(screen.getByRole("button", { name: "Shuffle" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Sort" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Draw" })).toBeDisabled();

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(mockReset).toHaveBeenCalled();
  });
});
