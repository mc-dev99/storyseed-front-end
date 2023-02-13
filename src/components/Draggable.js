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

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  // const style = transform
  //   ? {
  //       transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  //     }
  // //   : undefined;

  // const transform_x = transform ? `${transform.x}px` : "0px";
  // const transform_y = transform ? `${transform.y}px` : "0px";

  const style = {
    cursor: "pointer",
    position: "absolute",
    left: props.left,
    top: props.top,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Card
      sx={{ minWidth: 70, minHeight: 120 }}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
