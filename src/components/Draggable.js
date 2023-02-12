import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

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
    position: "absolute",
    left: props.left,
    top: props.top,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
