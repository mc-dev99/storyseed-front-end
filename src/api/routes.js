// CRUD routes to handle creating, reading, updating, and deleting decks and cards
import { supabase } from "../supabaseClient";

// Deck functions

// GET all decks
async function getAllDecks() {
  const { data: decks, error } = await supabase.from("decks").select();
  console.log(`All decks:`);
  console.log(decks);
  return decks;
}

// GET one deck
async function getDeck(id) {
  const { data: deck, error } = await supabase
    .from("decks")
    .select(`*, cards(*)`)
    .eq("id", id);
  console.log(`Deck ${id} is:`);
  console.log(deck[0]);
  return deck[0];
}

// POST new deck
// UPDATE a deck
// DELETE a deck

// Card functions

// GET all cards of a deck
// GET a specific card
// POST new card to a deck
// UPDATE a card
// DELETE a card

export { getAllDecks, getDeck };
