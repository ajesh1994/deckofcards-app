import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import heart from "../../images/SuitHearts.png";
import diamond from "../../images/SuitDiamonds.png";
import club from "../../images/SuitClubs.png";
import spade from "../../images/SuitSpades.png";

type IDeckCard = Omit<ICard, "suitRank">;

export const DeckCard = ({ cardValue, suit, colour }: IDeckCard) => {
  const getSuitSymbol = {
    diamond: { url: diamond, alt: "diamond" },
    heart: { url: heart, alt: "heart" },
    club: { url: club, alt: "club" },
    spade: { url: spade, alt: "spade" },
  };

  const suitSymbol = getSuitSymbol[suit];
  return (
    <Card
      variant="outlined"
      sx={{ color: colour, width: "60px", height: "100px" }}
      data-testid={`${cardValue}-${suit}`}
    >
      <CardContent
        sx={{
          display: "flex",
          padding: 0,
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box padding="4px">
          <Typography>{cardValue}</Typography>
          <img
            src={suitSymbol.url}
            alt={`${suitSymbol.alt}-suit-symbol`}
            style={{ maxWidth: 15 }}
          />
        </Box>
        <Box padding="4px" sx={{ transform: "rotate(-180deg)" }}>
          <Typography>{cardValue}</Typography>
          <img
            src={suitSymbol.url}
            alt={`${suitSymbol.alt}-suit-symbol-flipped`}
            style={{ maxWidth: 15 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
