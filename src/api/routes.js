// CRUD routes to handle creating, reading, updating, and deleting decks and cards
import { supabase } from "../supabaseClient";

// Deck functions

// const deckInfoFromJson = (deck) => {
//   const { id, title } = deck;
//   return { id, title };
// };

// GET all decks
async function getAllDecks() {
  const { data: decks, error } = await supabase
    .from("decks")
    .select()
    .order("title", { ascending: true });
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
async function createDeck(title) {
  const { error } = await supabase.from("decks").insert([{ title: title }]);
  console.log(`New deck created!`);
}

// UPDATE a deck
async function updateDeck(id, title) {
  const { data, error } = await supabase
    .from("decks")
    .update({ title: title })
    .eq("id", id);
  console.log(`Deck ${id} successfully updated! New title is ${title}`);
}

// DELETE a deck
async function deleteDeck(id) {
  const { data, error } = await supabase.from("decks").delete().eq("id", id);
  console.log(`Deck ${id} successfully deleted!`);
}

// Card functions

// GET all cards of a deck
async function getCardsOfDeck(deck_id) {
  const { data: cards, error } = await supabase
    .from("cards")
    .select()
    .eq("deck", deck_id);
  console.log(`All cards of deck ${deck_id}:`);
  console.log(cards);
  return cards;
}

// GET a specific card
async function getCard(id) {
  const { data: card, error } = await supabase
    .from("cards")
    .select()
    .eq("id", id);
  console.log(`Card ${id} is:`);
  console.log(card);
  return card;
}

// POST new card to a deck
async function createCard(title, desc, deck_id) {
  const { error } = await supabase
    .from("cards")
    .insert([{ title: title, desc: desc, deck: deck_id }]);
  console.log(`New card created!`);
}

// UPDATE a card
async function updateCard(id, title, desc) {
  const { data, error } = await supabase
    .from("cards")
    .update({ title: title, desc: desc })
    .eq("id", id);
  console.log(
    `Card ${id} successfully updated! New title is ${title} and description is ${desc}`
  );
}

// DELETE a card
async function deleteCard(id) {
  const { data, error } = await supabase.from("cards").delete().eq("id", id);
  console.log(`Card ${id} successfully deleted!`);
}

export {
  getAllDecks,
  getDeck,
  createDeck,
  updateDeck,
  deleteDeck,
  getCardsOfDeck,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};
