// import PropTypes from "prop-types";
import React from "react";
import { List, ListItemButton, ListItemText, MenuItem } from "@mui/material";

export default function CardList({ cards, onSelectCard, onDeleteCard }) {
  const cardComponents = cards.map((card, index) => {
    return (
      <ListItemButton disablePadding key={card.id} value={card.id}>
        <ListItemText primary={card.title} />
      </ListItemButton>
    );
  });

  return <List dense>{cardComponents}</List>;
}

// export default function CardList({ cards, onSelectCard, onDeleteCard }) {
//   const cardComponents = cards.map((card, index) => {
//     return (
//       <div key={index}>
//         <div onClick={() => onSelectCard(card.id)}>{card.title}</div>
//       </div>
//     );
//   });

//   return <div>{cardComponents}</div>;
// }

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
