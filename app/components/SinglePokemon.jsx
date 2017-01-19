import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {grey500, grey300} from 'material-ui/styles/colors';

const styles = {
  card: {
    height: '50%',
    width: '50%',
    backgroundColor: grey500,
    borderRadius: '5%',
    margin: 'auto',
    textAlign: 'center',
    padding: 100,
  },
};

const PokeCard = ({ selectedPokemon }) => {

  return (
  <div className='single-poke-display text-center' style={{    
      backgroundColor: grey300,
      margin: 50,
    }}>
    <Card style={styles.card}>
      <CardMedia 
        overlay={
          <CardTitle 
            title={selectedPokemon.name} 
            subtitle={selectedPokemon.description}
          />}
      >
        <img src={`/pokeImages/${selectedPokemon.name}.png` || selectedPokemon.front_shiny_sprite_male} />
      </CardMedia>
      <CardActions>
        <FlatButton label="View Stats" />
        <FlatButton label="Add To Team" />
      </CardActions>
    </Card>
  </div>
  );
}

import {getOnePokemon} from 'APP/app/reducers/pokemon'

import {connect} from 'react-redux'

export default connect (
  (state, ownProps) => ({ selectedPokemon: state.pokemon.selectedPokemon }),{getOnePokemon},
) (PokeCard)