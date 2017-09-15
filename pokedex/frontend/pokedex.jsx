import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import {
  fetchAllPokemon,
  fetchPokemon,
  createPokemon
} from './actions/pokemon_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  // window.selectAllPokemon = selectAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.fetchPokemon = fetchPokemon;
  window.createPokemon = createPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});

// {pokemon: {
//   name: 'Pikhaithree',
//   attack: 99,
//   defense: 100,
//   image_url: 'https://ag-log.o.auroraobjects.eu/01-2017/720s_mclaren/1.jpg',
//   poke_type: 'dragon'
// }}
