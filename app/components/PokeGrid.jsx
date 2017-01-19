import React from 'react';
import { Link } from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import {grey500, grey300} from 'material-ui/styles/colors';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '70%',
    height: 'auto',
    overflowY: 'auto',
    backgroundColor: grey300,
  },
};

const PokeGrid = ({ allPokemon, getOnePokemon }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={'auto'}
      style={styles.gridList}
      cols={3}
      padding={50}
    >
      <Subheader style={{
        padding: 20,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '2em',
        color: grey500,
      }}>All Pokémon</Subheader>
      {allPokemon.map((p) => (
        <Link key={p.id} to={`/pokemon/${p.id}`} onClick={() => getOnePokemon(p)}>
          <GridTile
            title={'#' + p.id + ': ' + p.name}
            subtitle={p.types && <span>TYPES: <b>{p.types}</b></span>}
            actionIcon={<IconButton><FavoriteBorder color="white" /></IconButton>}
            titleStyle={{
              textAlign: 'center',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              fontSize: '1.5em',
            }}
            style={{
              backgroundColor: grey500,
              borderRadius: '5%'
            }}
          >
          <img src={`/pokeImages/${p.name}.png` || p.front_shiny_sprite_male} />
          </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

export default PokeGrid