import { Card, CardContent } from "@mui/material";

export default function RightSidebar({ selectedCard }) {
  return (
    <aside id="rightSidebar">
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
