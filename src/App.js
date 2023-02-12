import "./App.css";
import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import {
  restrictToWindowEdges,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { supabase } from "./supabaseClient";
import Auth from "./components/Auth";
import Account from "./components/Account";
import * as routes from "./api/routes.js";

import { Droppable } from "./components/Droppable";
import { Draggable } from "./components/Draggable";

function App() {
  const containers = ["A", "B", "C"];
  const [dragPos, setDragPos] = useState({
    id: "draggable",
    position: {
      x: 750,
      y: 200,
    },
  });
  // const draggableMarkup = (
  //   <Draggable
  //     id="draggable"
  //     styles={{
  //       position: "absolute",
  //       left: `${parent.position.x}px`,
  //       top: `${parent.position.y}px`,
  //     }}
  //   >
  //     Drag me
  //   </Draggable>
  // );

  return (
    <div id="container">
      <header id="topBar">
        <h1>StorySeed</h1>
      </header>
      <div id="flex">
        <aside id="leftSidebar">
          <h2>Updates</h2>
          <div class="box">
            <p>I have recently updated this tool as of August 2022!</p>
            <ul>
              <li>Rewrote the JS to generate cleaner code</li>
              <li>
                Rewrote the CSS in a way that hopefully makes much more sense to
                edit
              </li>
              <li>Added a couple of new features!</li>
              <li>
                Old version is still available{" "}
                <a href="old.html" target="_blank">
                  here
                </a>
              </li>
            </ul>
          </div>
          <h2>Hi there!</h2>
          <p>
            Do you have a suggestion for a feature? Some criticism about the
            tool or something that confused you? Let me know!
            sadgrl[at]riseup.net
          </p>
        </aside>
        <main>
          <DndContext
            onDragEnd={handleDragEnd}
            modifiers={[restrictToWindowEdges, restrictToParentElement]}
          >
            {/* {parent === null ? draggableMarkup : null} */}
            <Draggable
              left={dragPos.position.x}
              top={dragPos.position.y}
              id="draggable"
            >
              Drag me!
            </Draggable>
            {containers.map((id) => (
              // We updated the Droppable component so it would accept an `id`
              // prop and pass it to `useDroppable`
              <Droppable key={id} id={id}>
                Drop here
              </Droppable>
            ))}
          </DndContext>
        </main>
        <aside id="rightSidebar">
          <h2>Updates</h2>
          <div class="box">
            <p>I have recently updated this tool as of August 2022!</p>
            <ul>
              <li>Rewrote the JS to generate cleaner code</li>
              <li>
                Rewrote the CSS in a way that hopefully makes much more sense to
                edit
              </li>
              <li>Added a couple of new features!</li>
              <li>
                Old version is still available{" "}
                <a href="old.html" target="_blank">
                  here
                </a>
              </li>
            </ul>
          </div>
          <h2>Hi there!</h2>
          <p>
            Do you have a suggestion for a feature? Some criticism about the
            tool or something that confused you? Let me know!
            sadgrl[at]riseup.net
          </p>
        </aside>
      </div>
    </div>
  );

  function handleDragEnd(ev) {
    // const paren = parent.find((x) => x.id === ev.active.id);
    // paren.position.x += ev.delta.x;
    // paren.position.y += ev.delta.y;
    // const _parens = parent.map((x) => {
    //   if (x.id === paren.id) return paren;
    //   return x;
    // });
    // const paren = {
    //   id: "draggable",
    //   position: {
    //     x: parent.position.x + ev.delta.x,
    //     y: parent.position.y + ev.delta.y,
    //   },
    // };
    setDragPos({
      id: "draggable",
      position: {
        x: dragPos.position.x + ev.delta.x,
        y: dragPos.position.y + ev.delta.y,
      },
    });
  }
}

export default App;
