import { render, screen } from "@testing-library/react";
import { DeckCard } from "./DeckCard";

describe("DeckCard Component", () => {
  test("renders the card successfully", () => {
    render(<DeckCard cardValue="6" suit="club" colour="black" />);

    expect(screen.getAllByText("6")).toHaveLength(2);
    expect(screen.getByAltText("club-suit-symbol")).toBeInTheDocument();
    expect(screen.getByAltText("club-suit-symbol-flipped")).toBeInTheDocument();
  });
});
