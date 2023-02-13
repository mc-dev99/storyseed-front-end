import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const NewCardForm = ({ deckId, onCreateCard }) => {
  const [open, setOpen] = useState(false);
  const [cardFormFields, setCardFormFields] = useState({
    title: "",
    desc: "",
  });

  const onTitleChange = (event) => {
    setCardFormFields({ title: event.target.value, desc: cardFormFields.desc });
  };

  const onDescChange = (event) => {
    setCardFormFields({
      title: cardFormFields.title,
      desc: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (event) => {
    console.log(deckId);
    onCreateCard(cardFormFields.title, cardFormFields.desc, deckId);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Card
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Card Title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="title"
            fullWidth
            variant="standard"
            onChange={onTitleChange}
          />
        </DialogContent>
        <DialogTitle>Card Description</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="Description"
            fullWidth
            variant="standard"
            onChange={onDescChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const UpdateCardForm = ({
  deckId,
  cardId,
  cardTitle,
  cardDesc,
  onUpdateCard,
}) => {
  const [open, setOpen] = useState(false);
  const [cardFormFields, setCardFormFields] = useState({
    title: cardTitle,
    desc: cardDesc,
  });

  const onTitleChange = (event) => {
    setCardFormFields({ title: event.target.value, desc: cardFormFields.desc });
  };

  const onDescChange = (event) => {
    setCardFormFields({
      title: cardFormFields.title,
      desc: event.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCreate = (event) => {
    console.log(deckId);
    onUpdateCard(cardId, cardFormFields.title, cardFormFields.desc, deckId);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Rename</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rename {cardTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="title"
            fullWidth
            variant="standard"
            onChange={onTitleChange}
          />
        </DialogContent>
        <DialogTitle>Edit Description</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="Description"
            fullWidth
            variant="standard"
            onChange={onDescChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const DeleteCardForm = ({ deckId, cardId, onDeleteCard }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (event) => {
    onDeleteCard(cardId, deckId);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Delete</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default function CrudDeckForms({
  selectedCard,
  selectedDeck,
  onCreateCard,
  onUpdateCard,
  onDeleteCard,
}) {
  return (
    <div>
      <div className="box">
        <NewCardForm deckId={selectedDeck.id} onCreateCard={onCreateCard} />
      </div>
      <div className="box">
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="text button group"
        >
          <UpdateCardForm
            deckId={selectedDeck.id}
            cardId={selectedCard.id}
            cardTitle={selectedCard.title}
            cardDesc={selectedCard.desc}
            onUpdateCard={onUpdateCard}
          />
          <DeleteCardForm
            deckId={selectedDeck.id}
            cardId={selectedCard.id}
            onDeleteCard={onDeleteCard}
          />
        </ButtonGroup>
      </div>
    </div>
  );
}
