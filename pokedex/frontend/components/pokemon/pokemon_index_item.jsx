import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  height: '25px',
  width: '25px'
};

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <NavLink to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.image_url} style={style}/>{pokemon.name}
    </NavLink>
  </li>
);

export default PokemonIndexItem;
