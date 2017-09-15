import APIUtil from "../util/api_util";
import { receivePokemonErrors } from './error_actions';

export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMONS = "RECEIVE_POKEMONS";
export const START_LOADING_ALL_POKEMON = "START_LOADING_ALL_POKEMON";
export const START_LOADING_SINGLE_POKEMON = "START_LOADING_SINGLE_POKEMON";

export const receivePokemons = (pokemons) => ({
  type: RECEIVE_POKEMONS,
  pokemons
});
export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const fetchAllPokemon = dispatch => {
  dispatch({type: START_LOADING_ALL_POKEMON});
  APIUtil.fetchAllPokemon().then(
    pokemons => dispatch(receivePokemons(pokemons))
  );
};

export const fetchPokemon = (id) => dispatch => {
  dispatch({type: START_LOADING_SINGLE_POKEMON});
  APIUtil.fetchPokemon(id).then(
    pokemon => {
      dispatch(receivePokemon(pokemon));
    }
  );
};

export const createPokemon = data => dispatch => {
  return APIUtil.createPokemon(data).then(
    pokemon => {
      console.log('POKEMON', pokemon);
      dispatch(receivePokemon(pokemon));
      return pokemon;
    },
    errors => dispatch(receivePokemonErrors(errors.responseJSON))
  );
};

export const editPokemon = (id, data) => (dispatch) => {
  debugger;
  return APIUtil.editPokemon(id, data).then(
    pokemon => {
      console.log('POKEMON', pokemon);
      dispatch(receivePokemon(pokemon));
      return pokemon;
    },
    errors => dispatch(receivePokemonErrors(errors.responseJSON))
  );
};
