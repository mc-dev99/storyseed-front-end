import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CardDraggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    cursor: "pointer",
    position: "absolute",
    left: props.left,
    top: props.top,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Card
      sx={{ minWidth: 77, minHeight: 132, maxWidth: 77, maxHeight: 132 }}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <CardContent>{props.desc}</CardContent>
    </Card>
  );
}
