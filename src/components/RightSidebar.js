import { Card, CardContent, Typography } from "@mui/material";
import CrudCardForms from "./CrudCardForms";

export default function RightSidebar({
  selectedCard,
  selectedDeck,
  onCreateCard,
  onUpdateCard,
  onDeleteCard,
}) {
  return (
    <aside id="rightSidebar">
      <Typography variant="h5" gutterBottom>
        Card Details
      </Typography>
      <br></br>
      <CrudCardForms
        selectedCard={selectedCard}
        selectedDeck={selectedDeck}
        onCreateCard={onCreateCard}
        onUpdateCard={onUpdateCard}
        onDeleteCard={onDeleteCard}
      />
      <br></br>
      <Card>
        <CardContent id="card-details">
          <h2>{selectedCard.title}</h2>
          <div className="box">
            <p>{selectedCard.desc}</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
