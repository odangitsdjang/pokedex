import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import { fetchAllPokemon, fetchPokemon } from './actions/pokemon_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.fetchPokemon = fetchPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
