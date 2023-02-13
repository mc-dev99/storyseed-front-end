import DeckList from "./DeckList";
import { ButtonGroup, Divider } from "@mui/material";
import CardList from "./CardList";
import NewDeckForm from "./NewDeckForm";
import UpdateDeckForm from "./UpdateDeckForm";
import DeleteDeckForm from "./DeleteDeckForm";

export default function LeftSidebar({
  selectedDeck,
  decks,
  cards,
  onSelectDeck,
  onCreateDeck,
  onUpdateDeck,
  onDeleteDeck,
  onSelectCard,
}) {
  return (
    <aside id="leftSidebar">
      <h2>Decks</h2>
      <div className="box">
        <DeckList decks={decks} onSelectDeck={onSelectDeck} />
      </div>
      <div className="box">
        <NewDeckForm onCreateDeck={onCreateDeck} />
      </div>
      <div className="box">
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="text button group"
        >
          <UpdateDeckForm
            deckId={selectedDeck.id}
            deckTitle={selectedDeck.title}
            onUpdateDeck={onUpdateDeck}
          />
          <DeleteDeckForm
            deckId={selectedDeck.id}
            onDeleteDeck={onDeleteDeck}
          />
        </ButtonGroup>
      </div>
      <h2>Cards</h2>
      <div className="box">
        <CardList cards={cards} onSelectCard={onSelectCard} />
      </div>
    </aside>
  );
}
