import DeckList from "./DeckList";
import { ButtonGroup, Box, Divider, Typography } from "@mui/material";
import CardList from "./CardList";
import CrudDeckForms from "./CrudDeckForms";
// import NewDeckForm from "./NewDeckForm";
// import UpdateDeckForm from "./UpdateDeckForm";
// import DeleteDeckForm from "./DeleteDeckForm";

export default function LeftSidebar({
  selectedDeck,
  decks,
  cards,
  drawnCards,
  onSelectDeck,
  onCreateDeck,
  onUpdateDeck,
  onDeleteDeck,
  onSelectCard,
  onDrawCard,
  onRemoveCard,
}) {
  return (
    <aside id="leftSidebar">
      <Typography variant="h5" gutterBottom>
        Decks
      </Typography>
      <div className="box">
        <DeckList decks={decks} onSelectDeck={onSelectDeck} />
      </div>
      <CrudDeckForms
        selectedDeck={selectedDeck}
        onCreateDeck={onCreateDeck}
        onUpdateDeck={onUpdateDeck}
        onDeleteDeck={onDeleteDeck}
      />
      <Box className="divider">
        <Divider flexItem />
      </Box>
      <Typography variant="h5" gutterBottom>
        Cards
      </Typography>
      <div className="box">
        <CardList
          cards={cards}
          drawnCards={drawnCards}
          onSelectCard={onSelectCard}
          onDrawCard={onDrawCard}
          onRemoveCard={onRemoveCard}
        />
      </div>
    </aside>
  );
}
