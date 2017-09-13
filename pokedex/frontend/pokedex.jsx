import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import { fetchAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex LOL</h1>, rootEl);
});
