import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function NewDeckForm({ deckId, deckTitle, onUpdateDeck }) {
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
}
