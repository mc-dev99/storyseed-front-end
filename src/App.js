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

import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import DeckList from "./components/DeckList";
import { Droppable } from "./components/Droppable";
import { Draggable } from "./components/Draggable";

function App() {
  //Authentication Session
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  //Deck and Card State
  const [deckListData, setDeckListData] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState({
    title: "",
    id: null,
  });
  const [cardsData, setCardsData] = useState([]);

  const refreshDecks = () => {
    return routes
      .getAllDecks()
      .then((decks) => {
        setDeckListData(decks);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    refreshDecks();
  }, []);

  const selectDeck = (id) => {
    return routes
      .getDeck(id)
      .then((deck) => {
        setSelectedDeck(deck);
        return routes
          .getCardsOfDeck(id)
          .then((cards) => {
            setCardsData(cards);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <LeftSidebar decks={deckListData} onSelectDeck={selectDeck} />
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
        <RightSidebar />
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
