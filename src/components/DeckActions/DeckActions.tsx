import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IDeckActions {
  cardLength: number;
  shuffle: () => void;
  sort: () => void;
  draw: () => void;
  reset: () => void;
}

export const DeckActions = ({
  cardLength,
  shuffle,
  sort,
  draw,
  reset,
}: IDeckActions) => {
  return (
    <Box marginBottom={4}>
      <Typography variant="h2" fontSize="2rem">
        Deck Actions
      </Typography>
      <Box
        display="flex"
        maxWidth="400px"
        justifyContent="space-evenly"
        padding={1}
        flexWrap="wrap"
        gap="10px"
      >
        <Button
          disabled={cardLength === 0}
          variant="contained"
          onClick={shuffle}
          aria-label="shuffle-button"
        >
          <Typography>Shuffle</Typography>
        </Button>
        <Button
          disabled={cardLength === 0}
          variant="contained"
          onClick={sort}
          aria-label="sort-button"
        >
          <Typography>Sort</Typography>
        </Button>
        <Button
          variant="contained"
          disabled={cardLength === 0}
          onClick={draw}
          aria-label="draw-button"
        >
          <Typography>Draw</Typography>
        </Button>
        <Button
          variant="contained"
          onClick={reset}
          disabled={cardLength === 52}
          aria-label="reset-button"
        >
          <Typography>Reset</Typography>
        </Button>
      </Box>
    </Box>
  );
};
