import { render, screen, within, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the app in the default state with 52 cards not drawn", () => {
    render(<App />);

    expect(screen.getByText("Deck of Cards")).toBeInTheDocument();

    expect(screen.getAllByTestId("originalDeck")).toHaveLength(52);
    expect(screen.queryByTestId("drawnDeck")).not.toBeInTheDocument();
  });

  test("shuffle button changes position of the deck of cards", () => {
    render(<App />);

    expect(
      within(screen.getAllByTestId("originalDeck")[0]).getByTestId("A-club")
    ).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Shuffle" }));

    expect(
      within(screen.queryAllByTestId("originalDeck")[0]).queryByTestId("A-club")
    ).not.toBeTruthy();
  });

  test("sort button changes position of the deck of cards", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Shuffle" }));

    expect(
      within(screen.queryAllByTestId("originalDeck")[0]).queryByTestId("A-club")
    ).not.toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Sort" }));

    expect(
      within(screen.getAllByTestId("originalDeck")[0]).getByTestId("A-club")
    ).toBeTruthy();
  });

  test("draw button moves a card to the drawn pile", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Draw" }));

    expect(screen.queryAllByTestId("originalDeck")).toHaveLength(51);
    expect(screen.queryAllByTestId("drawnDeck")).toHaveLength(1);
  });

  test("reset button moves all cards back to the deck", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Draw" }));

    expect(screen.queryAllByTestId("originalDeck")).toHaveLength(51);
    expect(screen.queryAllByTestId("drawnDeck")).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.queryAllByTestId("originalDeck")).toHaveLength(52);
    expect(screen.queryAllByTestId("drawnDeck")).toHaveLength(0);
  });
});
