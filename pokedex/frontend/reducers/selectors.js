export const selectAllPokemon = (state) => (
  Object.keys(state.entities.pokemon).map(id=> state.entities.pokemon[id])
);

export const selectAllItems = state => (
  Object.keys(state.entities.items).map(id => state.entities.items[id])
);
