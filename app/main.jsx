'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import {getAllPokemon, getOnePokemon, getOnePokemonById} from './reducers/pokemon'

import DexContainer from './containers/DexContainer'
import DexDrawer from './components/DexDrawer'
import SinglePokemon from './components/SinglePokemon'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();

const NavWrapper = connect( 
  () => ({})) (
  (/*{ user, */ { children }) =>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}><div>
      <DexDrawer/>
      {children}
    </div></MuiThemeProvider>
)

const onPokemonEnter = () => (!store.getState().pokemon.length && store.dispatch(getAllPokemon()))


/*Service worker stuff start*/

// Register the service worker if available.
const registerSW = filename => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(filename)
      .then(function(reg) {
          console.log('Successfully registered service worker', reg);
      }).catch(function(err) {
          console.warn('Error while registering service worker', err);
      });
  }
}

registerSW('sw.js')
// registerSW('/webpack-built-sw.js')

/* Service worker stuff finished*/

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={NavWrapper} >
        <IndexRedirect to="/pokemon" />
        <Route path="/pokemon" component={DexContainer} onEnter={onPokemonEnter} />
        <Route path='/pokemon/:id' component={SinglePokemon} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)