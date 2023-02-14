import React from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import {
  restrictToWindowEdges,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import CardDraggable from "./CardDraggable";

export default function CardDragGroup({ cards, handleDragEnd }) {
  console.log(cards);
  const cardGroup = cards.map((card) => {
    // We updated the Droppable component so it would accept an `id`
    // prop and pass it to `useDroppable`
    console.log(card);
    return (
      <CardDraggable
        key={card.id}
        left={card.position.x}
        top={card.position.y}
        id={card.id}
        title={card.title}
        desc={card.desc}
      />
    );
  });

  return (
    <DndContext
      onDragEnd={(ev) => handleDragEnd(ev, cards)}
      modifiers={[restrictToWindowEdges, restrictToParentElement]}
    >
      {cardGroup}
    </DndContext>
  );
}
