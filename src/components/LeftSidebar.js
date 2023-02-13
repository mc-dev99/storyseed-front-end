import DeckList from "./DeckList";
import { Divider } from "@mui/material";
import CardList from "./CardList";
import NewDeckForm from "./NewDeckForm";

export default function LeftSidebar({
  decks,
  cards,
  onSelectDeck,
  onCreateDeck,
}) {
  return (
    <aside id="leftSidebar">
      <h2>Decks</h2>
      <div className="box">
        <DeckList decks={decks} onSelectDeck={onSelectDeck} />
      </div>
      <NewDeckForm onCreateDeck={onCreateDeck} />
      <h2>Cards</h2>
      <div className="box">
        <CardList cards={cards} />
      </div>
    </aside>
  );
}
