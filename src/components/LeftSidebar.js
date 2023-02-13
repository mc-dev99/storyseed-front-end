import DeckList from "./DeckList";
import { Divider } from "@mui/material";
import CardList from "./CardList";

export default function LeftSidebar({ decks, cards, onSelectDeck }) {
  return (
    <aside id="leftSidebar">
      <h2>Decks</h2>
      <div className="box">
        <DeckList decks={decks} onSelectDeck={onSelectDeck} />
      </div>
      <h2>Cards</h2>
      <div className="box">
        <CardList cards={cards} />
      </div>
    </aside>
  );
}
