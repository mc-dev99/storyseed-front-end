import DeckList from "./DeckList";

export default function LeftSidebar({ decks, onSelectDeck }) {
  return (
    <aside id="leftSidebar">
      <h2>Deck</h2>
      <div class="box">
        <DeckList decks={decks} onSelectDeck={onSelectDeck} />
      </div>
      <h2>Hi there!</h2>
      <p>
        Do you have a suggestion for a feature? Some criticism about the tool or
        something that confused you? Let me know! sadgrl[at]riseup.net
      </p>
    </aside>
  );
}
