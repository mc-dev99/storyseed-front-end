// import PropTypes from "prop-types";
import { useState } from "react";
import { List, ListItemButton, ListItemText, MenuItem } from "@mui/material";

export default function CardList({ cards, onSelectCard, onDeleteCard }) {
  const [cardName, setCardName] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleClick = (event, index) => {
    // console.log(event);
    // const {
    //   target: { value },
    // } = event;
    console.log(event.target);
    setSelectedIndex(index);
    onSelectCard(index);
    // onSelectCard(event.target.getAttribute("card-id"));
  };

  const cardComponents = cards.map((card) => {
    return (
      <ListItemButton
        disablepadding="true"
        key={card.id}
        value={card.id}
        selected={selectedIndex === card.id}
        card-id={card.id}
        onClick={(event) => handleClick(event, card.id)}
      >
        <ListItemText card-id={card.id} value={card.id} primary={card.title} />
      </ListItemButton>
    );
  });

  return (
    <List dense>
      {cardComponents.length > 0 ? (
        cardComponents
      ) : (
        <ListItemButton disablepadding="true" disabled>
          <ListItemText primary={"Deck is empty"} />
        </ListItemButton>
      )}
    </List>
  );
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
