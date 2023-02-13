import DeckList from "./DeckList";
import { Divider } from "@mui/material";
import CardList from "./CardList";
import NewDeckForm from "./NewDeckForm";
import DeleteDeckForm from "./DeleteDeckForm";

export default function LeftSidebar({
  selectedDeck,
  decks,
  cards,
  onSelectDeck,
  onCreateDeck,
  onDeleteDeck,
}) {
  return (
    <aside id="leftSidebar">
      <h2>Decks</h2>
      <div className="box">
        <DeckList decks={decks} onSelectDeck={onSelectDeck} />
      </div>
      <NewDeckForm onCreateDeck={onCreateDeck} />
      <DeleteDeckForm id={selectedDeck.id} onDeleteDeck={onDeleteDeck} />
      <h2>Cards</h2>
      <div className="box">
        <CardList cards={cards} />
      </div>
    </aside>
  );
}
