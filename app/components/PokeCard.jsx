import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PokeCard = ({ pokemon }) => (
  <Card>
    <CardMedia
      overlay={
        <CardTitle 
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
          subtitle="Overlay subtitle" 
        />}
    >
      <img src={pokemon.front_shiny_sprite_male} />
    </CardMedia>
    <CardActions>
      <FlatButton label="View Stats" />
      <FlatButton label="Add To Team" />
    </CardActions>
  </Card>
);

import {connect} from 'react-redux'

export default connect (
  (state, ownProps) => ({ selectedPokemon: state.pokemon.selectedPokemon }),{getOnePokemon},
) (Pokemon)