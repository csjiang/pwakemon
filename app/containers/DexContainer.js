import React from 'react';
import { Link } from 'react-router';
import PokeGrid from '../components/PokeGrid'

export const Pokemon = ({ allPokemon, getOnePokemon }) => ( 
  <div style={{paddingTop: 40}}>
    <PokeGrid allPokemon={allPokemon}
      getOnePokemon={getOnePokemon}
    />
  </div>
)

import {getOnePokemon} from 'APP/app/reducers/pokemon'
import {connect} from 'react-redux'

export default connect (
  (state, ownProps) => ({ allPokemon: state.pokemon.allPokemon }),{getOnePokemon},
) (Pokemon)