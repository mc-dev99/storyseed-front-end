import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import CardDraggable from "./CardDraggable";

export default function CardDragGroup(cards) {
  console.log(cards.cards);
  const cardGroup = cards.cards.map((card) => {
    // We updated the Droppable component so it would accept an `id`
    // prop and pass it to `useDroppable`
    return (
      <CardDraggable
        key={card.id}
        left={card.position.x}
        top={card.position.y}
        id={card.id}
      >
        {card.title}
      </CardDraggable>
    );
  });

  return <div>{cardGroup}</div>;
}
