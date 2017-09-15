import React from 'react';

import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      attack: '',
      defense: '',
      image_url: '',
      poke_type: 'fire',
      moves: ['', '']
    };

  }

  update(e) {
    if (e.target.name.match(/move*/)) {
      let move1 = this.state.moves[0];
      let move2 = this.state.moves[1];
      if (e.target.name === 'move1') {
        move1 = e.target.value;
      } else {
        move2 = e.target.value;
      }
      this.setState({
        moves: [move1, move2]
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon({pokemon: this.state}).then(
      newPokemon => {
        this.props.history.push(`pokemon/${newPokemon.pokemon.id}`);
      }
    );
  }

  render() {
    return (
    <div className='detail'>
      <ul className='errors'>
        {this.props.errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <h1>Create Pokemon </h1>
      <label>
        Name:
        <input name="name" type="text" onChange={ (e)=> this.update(e) }/>
      </label>
      <br/>

      <label>
        Attack:
        <input name="attack" type="number" onChange={ (e)=> this.update(e) }/>
      </label>
      <br/>

      <label>
        Defense:
        <input name="defense" type="number" onChange={ (e)=> this.update(e) }/>
      </label>
      <br/>

      <label>
        Image url:
        <input name="image_url" type="text" onChange={ (e)=> this.update(e) }/>
      </label>
      <br/>

      <label>
         Pokemon type:
        <select name="poke_type" onChange={ (e)=> this.update(e) }>
          {window.POKEMON_TYPES.map((type)=> (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>
      <br/>

      <label>
        Move1:
        <input name="move1" type="text" onChange={ (e)=> this.update(e) }/>
      </label>
      <br/>

      <label>
        Move2:
        <input name="move2" type="text" onChange={ (e)=> this.update(e) }/>
      </label>
      <br/>

      <input type="submit" value="Create Pokemon!" onClick={ (e)=>this.handleSubmit(e) }/>
    </div>
  );
  }
}


export default PokemonForm;
