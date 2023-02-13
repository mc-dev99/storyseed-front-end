// import PropTypes from "prop-types";
import React from "react";

export default function DeckList({ decks, onSelectDeck, onDeleteCard }) {
  const deckComponents = decks.map((deck, index) => {
    return (
      <div key={index}>
        <div onClick={() => onSelectDeck(deck.id)}>{deck.title}</div>
      </div>
    );
  });

  return <div>{deckComponents}</div>;
}

// DeckList.propTypes = {
//   decks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string,
//       owner: PropTypes.string,
//       cards: PropTypes.arrayOf(
//         PropTypes.shape({
//           card_id: PropTypes.number.isRequired,
//           message: PropTypes.string,
//           likes_count: PropTypes.number,
//           setLikesCount: PropTypes.func,
//         })
//       ),
//     })
//   ).isRequired,
//   onGetDeckList: PropTypes.func.isRequired,
//   onSelectBoard: PropTypes.func,
// };
