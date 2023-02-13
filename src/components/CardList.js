// import PropTypes from "prop-types";
import React from "react";

export default function CardList({ cards, onSelectCard, onDeleteCard }) {
  const cardComponents = cards.map((card, index) => {
    return (
      <div key={index}>
        <div onClick={() => onSelectCard(card.id)}>{card.title}</div>
      </div>
    );
  });

  return <div>{cardComponents}</div>;
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
