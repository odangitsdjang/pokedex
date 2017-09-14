import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount () {
    this.props.fetchPokemon(this.props.match.params.pokemon_id);
  }

  componentWillReceiveProps (newProps) {
    if (typeof this.props.pokemon === 'undefined') {
      return;
    }
    if (this.props.match.params.pokemon_id === newProps.match.params.pokemon_id) {
      return;
    }
    this.props.fetchPokemon(newProps.match.params.pokemon_id);
  }

  render () {
    const style = {
      width: '200px',
      height: '200px'
    };
    if (this.props.pokemon) {
      return (
        <div>
          <h1>{ this.props.pokemon.name }</h1>
          <img src={this.props.pokemon.image_url} style={style}/>
        </div>
      );
    } else {
      return <div></div>;
    }

  }
}
export default PokemonDetail;
