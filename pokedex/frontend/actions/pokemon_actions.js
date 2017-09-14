import APIUtil from "../util/api_util";

export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMONS = "RECEIVE_POKEMONS";

export const receivePokemons = (pokemons) => ({
  type: RECEIVE_POKEMONS,
  pokemons
});
export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const fetchAllPokemon = dispatch => {
  APIUtil.fetchAllPokemon().then(
    pokemons => dispatch(receivePokemons(pokemons))
  );
};

export const fetchPokemon = (id) => dispatch => {
  APIUtil.fetchPokemon(id).then(
    pokemon => {
      dispatch(receivePokemon(pokemon));
    }
  );
};
