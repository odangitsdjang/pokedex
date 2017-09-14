import { connect } from 'react-redux';
import { fetchPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: state.entities.pokemon[state.ui.pokeDisplay]
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: (id) => dispatch(fetchPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
