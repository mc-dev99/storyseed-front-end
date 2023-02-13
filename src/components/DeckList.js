// import PropTypes from "prop-types";
import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function DeckList({ decks, onSelectDeck, onDeleteCard }) {
  // const deckComponents = decks.map((deck, index) => {
  //   return (
  //     <div key={index}>
  //       {/* <div onClick={() => onSelectDeck(deck.id)}>{deck.title}</div> */}
  //       <Button variant="outlined" onClick={() => onSelectDeck(deck.id)}>
  //         {deck.title}
  //       </Button>
  //     </div>
  //   );
  // });

  // return <div>{deckComponents}</div>;

  const [deckName, setDeckName] = useState("");
  const deckComponents = decks.map((deck) => {
    return (
      <MenuItem key={deck.id} value={deck.id}>
        {deck.title}
      </MenuItem>
    );
  });
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeckName(value);
    console.log(event);
    onSelectDeck(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Deck</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={deckName}
        onChange={handleChange}
        input={<OutlinedInput label="Deck" />}
      >
        {deckComponents}
      </Select>
    </FormControl>
  );
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
