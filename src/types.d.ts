type CardValue =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "A"
  | "J"
  | "Q"
  | "K";

type Suit = "spade" | "heart" | "diamond" | "club";
type Colour = "black" | "red";

interface ICard {
  cardValue: CardValue;
  suit: Suit;
  colour: Colour;
  suitRank: number;
}
