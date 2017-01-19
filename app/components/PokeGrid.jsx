import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
  },
};

const PokeGrid = ({ allPokemon, getOnePokemon }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div style={styles.root}>
      <GridList
        cellHeight={'auto'}
        style={styles.gridList}
        cols={3}
      >
        <Subheader>All Pokémon</Subheader>
        {allPokemon.map((p) => (
          <GridTile
            key={p.id}
            title={p.name.charAt(0).toUpperCase() + p.name.slice(1)}
            subtitle={<span>TYPES: <b>Placeholder, Placeholder</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={p.front_shiny_sprite_male} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </MuiThemeProvider>
);

export default PokeGrid