import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

import PokemonIndexContainer from './pokemon/pokemon_index_container';
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <div className='index'>
          <Route path='/' component={PokemonIndexContainer}/>
          <Route path='/pokemon/:pokemon_id' component={PokemonDetailContainer}/>
        </div>
        <div className='detail'>
        </div>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
