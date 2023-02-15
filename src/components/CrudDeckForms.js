import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const NewDeckForm = ({ onCreateDeck }) => {
  const [open, setOpen] = useState(false);
  const [deckFormFields, setDeckFormFields] = useState("");

  const onTitleChange = (event) => {
    setDeckFormFields(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (event) => {
    onCreateDeck(deckFormFields);
    setOpen(false);
  };

  return (
    <div className="crud">
      <Button variant="contained" onClick={handleClickOpen}>
        Create New Deck
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Deck</DialogTitle>
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
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const UpdateDeckForm = ({ deckId, deckTitle, onUpdateDeck }) => {
  const [open, setOpen] = useState(false);
  const [deckFormFields, setDeckFormFields] = useState(deckTitle);

  const onTitleChange = (event) => {
    setDeckFormFields(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (event) => {
    onUpdateDeck(deckId, deckFormFields);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Rename</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rename {deckTitle}</DialogTitle>
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
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const DeleteDeckForm = ({ deckId, onDeleteDeck }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (event) => {
    onDeleteDeck(deckId);
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
  selectedDeck,
  onCreateDeck,
  onUpdateDeck,
  onDeleteDeck,
}) {
  return (
    <div>
      <div className="box">
        <NewDeckForm onCreateDeck={onCreateDeck} />
      </div>
      <div className="box">
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="text button group"
        >
          <UpdateDeckForm
            deckId={selectedDeck.id}
            deckTitle={selectedDeck.title}
            onUpdateDeck={onUpdateDeck}
          />
          <DeleteDeckForm
            deckId={selectedDeck.id}
            onDeleteDeck={onDeleteDeck}
          />
        </ButtonGroup>
      </div>
    </div>
  );
}
