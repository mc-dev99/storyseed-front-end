import DeckList from "./DeckList";

export default function LeftSidebar({ decks, onSelectDeck }) {
  return (
    <aside id="leftSidebar">
      <h2>Decks</h2>
      <div className="box">
        <DeckList decks={decks} onSelectDeck={onSelectDeck} />
      </div>
      <h2>Cards</h2>
      <p>[Cards go here]</p>
    </aside>
  );
}
