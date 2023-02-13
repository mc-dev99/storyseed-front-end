import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function NewDeckForm({ onCreateDeck }) {
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
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Deck
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
}
