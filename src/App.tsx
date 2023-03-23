import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { DeckCard } from "./components/DeckCard";
import { deckOfCards } from "./utils/deckOfCards";
import { DeckActions } from "./components/DeckActions";

const App = () => {
  const [cards, setCards] = useState(deckOfCards);
  const [drawnCards, setDrawnCards] = useState<Array<ICard>>([]);

  const shuffle = () => {
    const newShuffle = [...cards];
    for (let i = newShuffle.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * 52);
      const tempOrigin = newShuffle[i];
      newShuffle[i] = newShuffle[randomIndex];
      newShuffle[randomIndex] = tempOrigin;
    }

    setCards(newShuffle);
  };

  const sort = () => {
    const sortedCards = [...cards].sort((a, b) => {
      if (a.suit < b.suit || (a.suit === b.suit && a.suitRank < b.suitRank)) {
        return -1;
      }
      return 1;
    });
    setCards(sortedCards);
  };

  const draw = () => {
    const randomItem = cards[cards.length - 1];

    const filteredDeck = [...cards].filter(
      (card) =>
        !(
          card.cardValue === randomItem.cardValue &&
          card.suit === randomItem.suit
        )
    );

    setCards(filteredDeck);
    setDrawnCards([...drawnCards, randomItem]);
  };

  const reset = () => {
    setCards(deckOfCards);
    setDrawnCards([]);
  };

  return (
    <Box bgcolor="#ADD8E6" padding={1}>
      <Typography sx={{ marginBottom: 4 }} fontSize="3rem" variant="h1">
        Deck of Cards
      </Typography>

      <DeckActions
        cardLength={cards.length}
        shuffle={shuffle}
        sort={sort}
        draw={draw}
        reset={reset}
      />

      <Box display="flex" justifyContent="space-evenly">
        <Box width="45%" height="fit-content">
          <Typography variant="h3" fontSize="1.5rem">
            Deck
          </Typography>
          <Box display="flex" sx={{ flexFlow: "wrap" }}>
            {cards.map((card, index) => {
              return (
                <Box key={index} padding={1} data-testid="originalDeck">
                  <DeckCard
                    cardValue={card.cardValue}
                    suit={card.suit}
                    colour={card.colour}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box width="45%" height="fit-content">
          <Typography variant="h3" fontSize="1.5rem">
            Drawn
          </Typography>
          <Box display="flex" sx={{ flexFlow: "wrap" }}>
            {drawnCards.map((card, index) => {
              return (
                <Box key={index} padding={1} data-testid="drawnDeck">
                  <DeckCard
                    cardValue={card.cardValue}
                    suit={card.suit}
                    colour={card.colour}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
