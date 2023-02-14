import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
export default function CardDraggable({ cards, left, top, id, title, desc }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    cursor: "pointer",
    position: "absolute",
    left: left,
    top: top,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Card
      sx={{ minWidth: 100, minHeight: 150, maxWidth: 100, maxHeight: 132 }}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <p className="CardTitle">{title}</p>
    </Card>
  );
}
