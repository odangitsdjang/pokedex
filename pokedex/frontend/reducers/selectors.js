export const selectAllPokemon = (state) => (
  Object.keys(state.entities.pokemon).map(id=> state.entities.pokemon[id])
);
