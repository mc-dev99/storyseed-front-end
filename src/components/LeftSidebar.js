import DeckList from "./DeckList";
import { ButtonGroup, Divider } from "@mui/material";
import CardList from "./CardList";
import CrudDeckForms from "./CrudDeckForms";
// import NewDeckForm from "./NewDeckForm";
// import UpdateDeckForm from "./UpdateDeckForm";
// import DeleteDeckForm from "./DeleteDeckForm";

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
      <CrudDeckForms
        selectedDeck={selectedDeck}
        onCreateDeck={onCreateDeck}
        onUpdateDeck={onUpdateDeck}
        onDeleteDeck={onDeleteDeck}
      />
      <h2>Cards</h2>
      <div className="box">
        <CardList cards={cards} onSelectCard={onSelectCard} />
      </div>
    </aside>
  );
}
