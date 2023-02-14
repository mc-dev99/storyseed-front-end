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
import { Typography } from "@mui/material";

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
  const [selectedCard, setSelectedCard] = useState({
    title: "",
    id: null,
    desc: "No card selected",
  });

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

  const createDeck = (title) => {
    return routes
      .createDeck(title)
      .then(() => {
        refreshDecks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDeck = (id, title) => {
    return routes
      .updateDeck(id, title)
      .then(() => {
        refreshDecks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDeck = (id) => {
    return routes
      .deleteDeck(id)
      .then(() => {
        refreshDecks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshCards = (id) => {
    return routes
      .getCardsOfDeck(id)
      .then((cards) => {
        setCardsData(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectCard = (id) => {
    return routes
      .getCard(id)
      .then((card) => {
        setSelectedCard(card[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createCard = (title, desc, deck_id) => {
    return routes
      .createCard(title, desc, deck_id)
      .then(() => {
        refreshDecks();
        refreshCards(deck_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCard = (id, title, desc, deck_id) => {
    return routes
      .updateCard(id, title, desc)
      .then(() => {
        refreshDecks();
        refreshCards(deck_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCard = (id, deck_id) => {
    return routes
      .deleteCard(id)
      .then(() => {
        refreshDecks();
        refreshCards(deck_id);
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
        <Typography variant="h2" gutterBottom>
          storyseed
        </Typography>
      </header>
      <div id="flex">
        <LeftSidebar
          selectedDeck={selectedDeck}
          decks={deckListData}
          cards={cardsData}
          onSelectDeck={selectDeck}
          onCreateDeck={createDeck}
          onUpdateDeck={updateDeck}
          onDeleteDeck={deleteDeck}
          onSelectCard={selectCard}
        />
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
        <RightSidebar
          selectedCard={selectedCard}
          selectedDeck={selectedDeck}
          onCreateCard={createCard}
          onUpdateCard={updateCard}
          onDeleteCard={deleteCard}
        />
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
