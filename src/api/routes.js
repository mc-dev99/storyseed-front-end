// CRUD routes to handle creating, reading, updating, and deleting decks and cards
import { supabase } from "../supabaseClient";

// Deck functions

// GET all decks
// GET one deck
// POST new deck
// UPDATE a deck
// DELETE a deck

async function getDecks() {
  const { data: decks, error } = await supabase
    .from("decks")
    .select(`*, cards(*)`)
    .eq("id", "4");
  console.log(decks, error);
}

// Card functions

// GET all cards of a deck
// GET a specific card
// POST new card to a deck
// UPDATE a card
// DELETE a card
