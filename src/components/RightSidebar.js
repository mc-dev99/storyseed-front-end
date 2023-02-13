import { Card, CardContent } from "@mui/material";
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
      <CrudCardForms
        selectedCard={selectedCard}
        selectedDeck={selectedDeck}
        onCreateCard={onCreateCard}
        onUpdateCard={onUpdateCard}
        onDeleteCard={onDeleteCard}
      />
      <Card>
        <CardContent>
          <h2>{selectedCard.title}</h2>
          <div className="box">
            <p>{selectedCard.desc}</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
